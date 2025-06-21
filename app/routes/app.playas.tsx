import {
  //   Box,
  Card,
  Layout,
  Link,
  //   List,
  Page,
  Text,
  //Thumbnail,
  BlockStack,
  IndexTable,
  Button,
  InlineStack
  //InlineStack
} from '@shopify/polaris'
import { Empty } from '@/components/global/EmptyState'
//import { TitleBar } from '@shopify/app-bridge-react'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { type LoaderFunctionArgs } from '@remix-run/node'
import { authenticate } from '../shopify.server'
import { getBeaches } from '@/models/Beach.server'
import { type Beach } from '@prisma/client'
import { truncate } from '@/utils'

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await authenticate.admin(request)
  const rawBeaches = await getBeaches(session.shop) // Cambiamos el nombre para mayor claridad

  // Explicitly type rawBeaches if you know the structure before conversion
  const beaches: {
    name: string
    id: string
    shop: string
    coordinates: string
    pageId: string | null
    createdAt: string | Date // Permitimos string o Date inicialmente
    updatedAt: string | Date // Permitimos string o Date inicialmente
  }[] = rawBeaches

  const parsedBeaches = beaches.map((beach) => ({
    ...beach,
    createdAt: beach.createdAt instanceof Date ? beach.createdAt : new Date(beach.createdAt),
    updatedAt: beach.updatedAt instanceof Date ? beach.updatedAt : new Date(beach.updatedAt)
  })) as Beach[] // Aseguramos que el resultado sea del tipo Beach[]

  return parsedBeaches
}

const BeachTable = ({ beaches }: { beaches: Beach[] }) => (
  <IndexTable
    resourceName={{
      singular: 'Playa',
      plural: 'Playas'
    }}
    itemCount={beaches.length}
    headings={[
      { title: 'Thumbnail', hidden: true },
      { title: 'Nombre' },
      { title: 'Ubicación' },
      { title: 'Creada el' },
      { title: 'Ultima actualizacón' }
    ]}
    selectable={false}>
    {beaches?.map((beach, index) => <BeachTableRow key={beach.id} beach={beach} index={index} />)}
  </IndexTable>
)

const BeachTableRow = ({ beach, index }: { beach: Beach; index: number }) => (
  <IndexTable.Row id={beach.id} position={index}>
    <IndexTable.Cell>
      {/* <Thumbnail source={qrCode.productImage || ImageIcon} alt={qrCode.productTitle} size="small" /> */}
    </IndexTable.Cell>
    <IndexTable.Cell>
      <Link url={`/app/playa/${beach?.id}`}>{truncate(beach?.name)}</Link>
    </IndexTable.Cell>
    <IndexTable.Cell>{truncate(beach.name)}</IndexTable.Cell>
    <IndexTable.Cell>{new Date(beach?.createdAt).toDateString()}</IndexTable.Cell>
    <IndexTable.Cell>{new Date(beach?.updatedAt).toDateString()}</IndexTable.Cell>
  </IndexTable.Row>
)

export default function PlayaPage() {
  const navigate = useNavigate()
  const loadedBeaches = useLoaderData<typeof loader>()
  // Convert string dates back to Date objects
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
