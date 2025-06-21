import { useState } from 'react'
import { type ActionFunctionArgs, type LoaderFunctionArgs, redirect } from '@remix-run/node'
import {
  // useActionData,
  useLoaderData,
  useNavigation,
  useSubmit
  // useNavigate
} from '@remix-run/react'
import { authenticate } from '../shopify.server'
import {
  Card,
  // Bleed,
  // Button,
  // ChoiceList,
  // Divider,
  // EmptyState,
  // InlineStack,
  // InlineError,
  Layout,
  Page,
  Text,
  TextField,
  // Thumbnail,
  BlockStack,
  PageActions
} from '@shopify/polaris'
// import { ImageIcon } from '@shopify/polaris-icons'
// import { type Beach } from '@prisma/client'

import db from '../db.server'
import { getPage } from '@/models/Page.server'

export async function loader({ params }: LoaderFunctionArgs) {
  //const { admin } = await authenticate.admin(request)

  if (params.id == 'new') {
    return {
      name: '',
      coordinates: ''
    }
  }
  return await getPage(params.id as string)
}

export async function action({ request, params }: ActionFunctionArgs) {
  const { session } = await authenticate.admin(request)
  const { shop } = session

  const data = {
    ...Object.fromEntries(await request.formData()),
    shop
  }

  if (data?.action === 'delete') {
    await db.page.delete({ where: { id: params.id } })
    return redirect('/app/playas')
  }

  params.id === 'new'
    ? await db.page.create({ data })
    : await db.page.update({ where: { id: params.id }, data })

  return redirect('/app/playas')
}

export default function Playa() {
  const beach = useLoaderData<typeof loader>()
  const submit = useSubmit()
  const [formState, setFormState] = useState<any | null>(beach)
  const [cleanFormState, setCleanFormState] = useState<any | null>(beach)
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState)
  const nav = useNavigation()
  const isSaving = nav.state === 'submitting' && nav.formData?.get('action') !== 'delete'
  const isDeleting = nav.state === 'submitting' && nav.formData?.get('action') === 'delete'

  function handleSave() {
    const data = {
      name: formState?.name || '',
      coordinates: formState?.coordinates || ''
    }
    setCleanFormState({ ...formState })
    submit(data, { method: 'post' })
  }

  console.log('Beach: ', beach)

  return (
    <Page>
      <ui-title-bar title={beach?.id ? 'Editar playa' : 'Crear nueva playa'}>
        <button variant="breadcrumb">Playa</button>
      </ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <BlockStack gap="100">
                <Text as="h2">Nombre</Text>
                <TextField
                  id="name"
                  helpText="Ingresa el nombre de la playa"
                  label="name"
                  labelHidden
                  autoComplete="off"
                  value={formState?.name}
                  onChange={(name) => setFormState({ ...formState, name })}
                  // error={errors?.title}
                />
              </BlockStack>
              <BlockStack gap="100">
                <Text as="h2">Coordenadas</Text>
                <TextField
                  id="coordinates"
                  helpText="Debes ingresar las coordenadas en este formato {lat,lon} ej:{lat:-12,lon:33}"
                  label="coordinates"
                  labelHidden
                  autoComplete="off"
                  value={formState?.coordinates}
                  onChange={(coordinates) => setFormState({ ...formState, coordinates })}
                  // error={errors?.title}
                />
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <PageActions
            secondaryActions={[
              {
                content: 'Eliminar',
                loading: isDeleting,
                // disabled: !qrCode.id || !qrCode || isSaving || isDeleting,
                destructive: true,
                outline: true,
                onAction: () => submit({ action: 'delete' }, { method: 'post' })
              }
            ]}
            primaryAction={{
              content: 'Guardar',
              loading: isSaving,
              disabled: !isDirty || isSaving || isDeleting,
              onAction: handleSave
            }}
          />
        </Layout.Section>
      </Layout>
    </Page>
  )
}
