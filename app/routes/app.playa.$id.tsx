import { useState } from 'react'
import { type ActionFunctionArgs, type LoaderFunctionArgs, redirect } from '@remix-run/node'
import { useLoaderData, useNavigation, useSubmit } from '@remix-run/react'
import { authenticate } from '../shopify.server'
import {
  Card,
  Layout,
  Page,
  Text,
  TextField,
  BlockStack,
  PageActions,
  FormLayout,
  Select,
  Banner
} from '@shopify/polaris'

import db from '../db.server'
import { getBeach, createBeach, deleteBeach } from '@/models/Beach.server'

const parseCoordinates = (coordString: string): Coordinates => {
  try {
    // Try different parsing approaches
    let coords

    // First attempt: direct JSON parse with quote normalization
    try {
      coords = JSON.parse(coordString.replace(/'/g, '"'))
    } catch (e) {
      // Second attempt: try to parse string with relaxed format
      const matches = coordString.match(/lat:\s*([-\d.]+)\s*,\s*lng:\s*([-\d.]+)/)
      if (matches) {
        coords = {
          lat: parseFloat(matches[1]),
          lng: parseFloat(matches[2])
        }
      }
    }

    // Validate the parsed coordinates
    if (coords && typeof coords === 'object' && 'lat' in coords && 'lng' in coords) {
      const lat = parseFloat(coords.lat)
      const lng = parseFloat(coords.lng)
      if (!isNaN(lat) && !isNaN(lng)) {
        return { lat, lng }
      }
    }

    // If parsing fails, return default coordinates
    console.error('Failed to parse coordinates:', coordString)
    return { lat: 0, lng: 0 }
  } catch (e) {
    console.error('Error parsing coordinates:', e)
    return { lat: 0, lng: 0 }
  }
}

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.id === 'new') {
    return {
      id: null,
      name: '',
      coordinates: '{"lat": 0, "lng": 0}',
      country: 'Chile',
      city: ''
    }
  }

  const beach = await getBeach(params.id as string)
  if (!beach) {
    throw new Error('Beach not found')
  }

  // Ensure coordinates are in the correct format
  try {
    const coords = parseCoordinates(beach.coordinates)
    beach.coordinates = JSON.stringify(coords)
  } catch (e) {
    console.error('Error formatting coordinates:', e)
  }

  return beach
}

export async function action({ request, params }: ActionFunctionArgs) {
  const { session, admin } = await authenticate.admin(request)
  const { shop } = session

  const formData = await request.formData()
  const data: any = {
    ...Object.fromEntries(formData),
    shop
  }

  if (data?.action === 'delete') {
    await deleteBeach(params.id as string, admin.graphql, shop)
    return redirect('/app/playas')
  }

  // Create coordinates string from separate lat/lng fields
  try {
    const lat = parseFloat(data.latitude)
    const lng = parseFloat(data.longitude)

    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      return { error: 'Las coordenadas ingresadas no son válidas' }
    }

    data.coordinates = JSON.stringify({ lat, lng })
    delete data.latitude
    delete data.longitude
  } catch (e) {
    return { error: 'Error al procesar las coordenadas' }
  }

  if (params.id === 'new') {
    await createBeach(data, admin.graphql)
  } else {
    await db.beach.update({
      where: { id: params.id },
      data: {
        name: data.name,
        coordinates: data.coordinates,
        country: data.country,
        city: data.city
      }
    })
  }

  return redirect('/app/playas')
}

interface Beach {
  id: string | null
  name: string
  coordinates: string
  country: string
  city: string
}

interface Coordinates {
  lat: number
  lng: number
}

export default function Playa() {
  const beach = useLoaderData<typeof loader>() as Beach
  const submit = useSubmit()
  const [formState, setFormState] = useState<Beach>(beach)
  const [cleanFormState, setCleanFormState] = useState<Beach>(beach)
  const [coordinates, setCoordinates] = useState<Coordinates>(() => {
    return parseCoordinates(beach.coordinates)
  })
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState)
  const nav = useNavigation()
  const isSaving = nav.state === 'submitting' && nav.formData?.get('action') !== 'delete'
  const isDeleting = nav.state === 'submitting' && nav.formData?.get('action') === 'delete'

  const [coordError, setCoordError] = useState('')

  const validateCoordinate = (value: string, type: 'lat' | 'lng'): boolean => {
    const num = parseFloat(value)
    if (isNaN(num)) {
      setCoordError('Las coordenadas deben ser números válidos')
      return false
    }
    if (type === 'lat' && (num < -90 || num > 90)) {
      setCoordError('La latitud debe estar entre -90 y 90 grados')
      return false
    }
    if (type === 'lng' && (num < -180 || num > 180)) {
      setCoordError('La longitud debe estar entre -180 y 180 grados')
      return false
    }
    setCoordError('')
    return true
  }

  function handleSave() {
    if (
      !validateCoordinate(coordinates.lat.toString(), 'lat') ||
      !validateCoordinate(coordinates.lng.toString(), 'lng')
    ) {
      return
    }

    const data = new FormData()
    data.append('name', formState.name || '')
    data.append('country', formState.country || 'Chile')
    data.append('city', formState.city || '')
    data.append('latitude', coordinates.lat.toString())
    data.append('longitude', coordinates.lng.toString())

    setCleanFormState({ ...formState })
    submit(data, { method: 'post' })
  }

  const countryOptions = [
    { label: 'Chile', value: 'Chile' },
    { label: 'Argentina', value: 'Argentina' },
    { label: 'Perú', value: 'Peru' },
    { label: 'Bolivia', value: 'Bolivia' },
    { label: 'Ecuador', value: 'Ecuador' },
    { label: 'Colombia', value: 'Colombia' },
    { label: 'Venezuela', value: 'Venezuela' },
    { label: 'Brasil', value: 'Brasil' },
    { label: 'Uruguay', value: 'Uruguay' },
    { label: 'Paraguay', value: 'Paraguay' }
  ]

  return (
    <Page>
      <ui-title-bar title={beach?.id ? 'Editar playa' : 'Crear nueva playa'}>
        <button variant="breadcrumb">Playa</button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <FormLayout>
                <BlockStack gap="100">
                  <Text as="h2" variant="headingMd">
                    Información básica
                  </Text>
                  <TextField
                    id="name"
                    label="Nombre de la playa"
                    autoComplete="off"
                    value={formState?.name}
                    onChange={(name) => setFormState({ ...formState, name })}
                  />
                </BlockStack>

                <FormLayout.Group>
                  <Select
                    label="País"
                    options={countryOptions}
                    value={formState?.country}
                    onChange={(country) => setFormState({ ...formState, country })}
                  />
                  <TextField
                    id="city"
                    label="Ciudad"
                    autoComplete="off"
                    value={formState?.city}
                    onChange={(city) => setFormState({ ...formState, city })}
                  />
                </FormLayout.Group>

                <BlockStack gap="100">
                  <Text as="h2" variant="headingMd">
                    Ubicación
                  </Text>
                  <FormLayout.Group>
                    <TextField
                      id="latitude"
                      label="Latitud"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      helpText="Valor entre -90 y 90"
                      value={coordinates.lat.toString()}
                      onChange={(value) => {
                        const lat = parseFloat(value)
                        if (!isNaN(lat)) {
                          setCoordinates((prev) => ({ ...prev, lat }))
                          validateCoordinate(value, 'lat')
                        }
                      }}
                      error={coordError && coordError.includes('latitud') ? coordError : undefined}
                    />
                    <TextField
                      id="longitude"
                      label="Longitud"
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      helpText="Valor entre -180 y 180"
                      value={coordinates.lng.toString()}
                      onChange={(value) => {
                        const lng = parseFloat(value)
                        if (!isNaN(lng)) {
                          setCoordinates((prev) => ({ ...prev, lng }))
                          validateCoordinate(value, 'lng')
                        }
                      }}
                      error={coordError && coordError.includes('longitud') ? coordError : undefined}
                    />
                  </FormLayout.Group>
                </BlockStack>

                {coordError && (
                  <Banner tone="critical">
                    <p>{coordError}</p>
                  </Banner>
                )}
              </FormLayout>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <PageActions
            secondaryActions={[
              {
                content: 'Eliminar',
                loading: isDeleting,
                destructive: true,
                outline: true,
                disabled: !beach?.id || isSaving || isDeleting,
                onAction: () => submit({ action: 'delete' }, { method: 'post' })
              }
            ]}
            primaryAction={{
              content: 'Guardar',
              loading: isSaving,
              disabled: !isDirty || isSaving || isDeleting || !!coordError,
              onAction: handleSave
            }}
          />
        </Layout.Section>
      </Layout>
    </Page>
  )
}
