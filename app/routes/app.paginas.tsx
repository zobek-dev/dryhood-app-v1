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
  IndexTable
  //InlineStack
} from '@shopify/polaris'
import { Empty } from '@/components/global/EmptyState'
//import { TitleBar } from '@shopify/app-bridge-react'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { type LoaderFunctionArgs } from '@remix-run/node'
import { authenticate } from '../shopify.server'
import { getPages } from '@/models/Page.server'
import { type Page as PageType } from '@prisma/client'
import { truncate } from '@/utils'

export async function loader({ request }: LoaderFunctionArgs) {
  const { session } = await authenticate.admin(request)
  const rawPages = await getPages(session.shop) // Cambiamos el nombre para mayor claridad

  // Explicitly type rawBeaches if you know the structure before conversion
  const pages: {
    id: string
    shop: string
    title: string
    slug: string
    shopifyId: string | null
    createdAt: string | Date
    updatedAt: string | Date
  }[] = rawPages

  const parsedBeaches = pages.map((page) => ({
    ...page,
    createdAt: page.createdAt instanceof Date ? page.createdAt : new Date(page.createdAt),
    updatedAt: page.updatedAt instanceof Date ? page.updatedAt : new Date(page.updatedAt)
  })) as PageType[] // Aseguramos que el resultado sea del tipo Beach[]

  return parsedBeaches
}

const BeachTable = ({ pages }: { pages: PageType[] }) => (
  <IndexTable
    resourceName={{
      singular: 'Página',
      plural: 'Páginas'
    }}
    itemCount={pages.length}
    headings={[
      { title: 'Thumbnail', hidden: true },
      { title: 'Título' },
      { title: 'Slug' },
      { title: 'Playa' },
      { title: 'Creada el' },
      { title: 'Ultima actualizacón' }
    ]}
    selectable={false}>
    {pages?.map((page, index) => <BeachTableRow key={page.id} page={page} index={index} />)}
  </IndexTable>
)

const BeachTableRow = ({ page, index }: { page: PageType; index: number }) => (
  <IndexTable.Row id={page.id} position={index}>
    <IndexTable.Cell>
      {/* <Thumbnail source={qrCode.productImage || ImageIcon} alt={qrCode.productTitle} size="small" /> */}
    </IndexTable.Cell>
    <IndexTable.Cell>
      <Link url={`/app/pagina/${page?.id}`}>{truncate(page?.title)}</Link>
    </IndexTable.Cell>
    <IndexTable.Cell>{page.slug}</IndexTable.Cell>
    <IndexTable.Cell>Playa</IndexTable.Cell>
    <IndexTable.Cell>{new Date(page?.createdAt).toDateString()}</IndexTable.Cell>
    <IndexTable.Cell>{new Date(page?.updatedAt).toDateString()}</IndexTable.Cell>
  </IndexTable.Row>
)

export default function PlayaPage() {
  const navigate = useNavigate()
  const loadedPages = useLoaderData<typeof loader>()
  // Convert string dates back to Date objects
  const pages = loadedPages.map((page) => ({
    ...page,
    createdAt: new Date(page.createdAt),
    updatedAt: new Date(page.updatedAt)
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
              <BlockStack gap="500">
                <Text as="h2" variant="headingLg">
                  Playas
                </Text>
                <Text as="p">Acá puedes administrar las playas de tu tienda</Text>
              </BlockStack>
            </Card>
            <Card padding="0">
              {pages.length === 0 ? (
                <Empty
                  heading="Páginas"
                  textAction="Crear Nueva Página"
                  onAction={() => navigate('/app/pagina/new')}
                  content="No páginas que mostrar"
                />
              ) : (
                <BeachTable pages={pages} />
              )}
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

// function Code({ children }: { children: React.ReactNode }) {
//   return (
//     <Box
//       as="span"
//       padding="025"
//       paddingInlineStart="100"
//       paddingInlineEnd="100"
//       background="bg-surface-active"
//       borderWidth="025"
//       borderColor="border"
//       borderRadius="100"
//     >
//       <code>{children}</code>
//     </Box>
//   );
// }
