import {
  Card,
  Layout,
  Link,
  Page,
  Text,
  BlockStack,
  IndexTable,
  Button,
  InlineStack
} from '@shopify/polaris'
import { Empty } from '@/components/global/EmptyState'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { type LoaderFunctionArgs } from '@remix-run/node'
import { authenticate } from '../shopify.server'
import { getBeaches } from '@/models/Beach.server'
import { type Beach } from '@prisma/client'
import { truncate } from '@/utils'

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await authenticate.admin(request)
  const rawBeaches = await getBeaches(session.shop)

  const beaches: {
    name: string
    id: string
    shop: string
    coordinates: string
    country: string
    city: string
    pageId: string | null
    createdAt: string | Date
    updatedAt: string | Date
  }[] = rawBeaches

  const parsedBeaches = beaches.map((beach) => ({
    ...beach,
    createdAt: beach.createdAt instanceof Date ? beach.createdAt : new Date(beach.createdAt),
    updatedAt: beach.updatedAt instanceof Date ? beach.updatedAt : new Date(beach.updatedAt)
  })) as Beach[]

  return parsedBeaches
}

const formatCoordinates = (coordString: string): string => {
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
        return `${lat.toFixed(6)}, ${lng.toFixed(6)}`
      }
    }

    // If we can't parse it properly, return a formatted version of the raw string
    return coordString.replace(/[{}']/g, '').trim()
  } catch (e) {
    // If all parsing fails, return a placeholder
    console.error('Error parsing coordinates:', e)
    return 'Formato inválido'
  }
}

const BeachTable = ({ beaches }: { beaches: Beach[] }) => (
  <IndexTable
    resourceName={{
      singular: 'Playa',
      plural: 'Playas'
    }}
    itemCount={beaches.length}
    headings={[
      { title: 'Nombre' },
      { title: 'Ciudad' },
      { title: 'País' },
      { title: 'Coordenadas' },
      { title: 'Última actualización' }
    ]}
    selectable={false}>
    {beaches?.map((beach, index) => <BeachTableRow key={beach.id} beach={beach} index={index} />)}
  </IndexTable>
)

const BeachTableRow = ({ beach, index }: { beach: Beach; index: number }) => {
  return (
    <IndexTable.Row id={beach.id} position={index}>
      <IndexTable.Cell>
        <Link url={`/app/playa/${beach?.id}`}>{truncate(beach?.name)}</Link>
      </IndexTable.Cell>
      <IndexTable.Cell>{beach.city || '-'}</IndexTable.Cell>
      <IndexTable.Cell>{beach.country || 'Chile'}</IndexTable.Cell>
      <IndexTable.Cell>{formatCoordinates(beach.coordinates)}</IndexTable.Cell>
      <IndexTable.Cell>
        {new Date(beach?.updatedAt).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </IndexTable.Cell>
    </IndexTable.Row>
  )
}

export default function PlayaPage() {
  const navigate = useNavigate()
  const loadedBeaches = useLoaderData<typeof loader>()
  const beaches = loadedBeaches.map((beach) => ({
    ...beach,
    createdAt: new Date(beach.createdAt),
    updatedAt: new Date(beach.updatedAt)
  }))

  return (
    <Page>
      <ui-title-bar title={'Playas'}>
        <button variant="breadcrumb" onClick={() => navigate('/app')}>
          Inicio
        </button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card>
              <InlineStack align="space-between">
                <BlockStack gap="500">
                  <Text as="h2" variant="headingLg">
                    Playas
                  </Text>
                  <Text as="p">Acá puedes administrar las playas de tu tienda</Text>
                </BlockStack>
                <BlockStack>
                  <Button onClick={() => navigate('/app/playa/new')}>Crear Playa</Button>
                </BlockStack>
              </InlineStack>
            </Card>
            <Card padding="0">
              {beaches.length === 0 ? (
                <Empty
                  heading="Playas"
                  textAction="Crear Nueva Playa"
                  onAction={() => navigate('/app/playa/new')}
                  content="No hay playas que mostrar"
                />
              ) : (
                <BeachTable beaches={beaches} />
              )}
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
