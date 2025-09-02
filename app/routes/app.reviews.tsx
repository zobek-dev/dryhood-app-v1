import {
  Card,
  Layout,
  Page,
  Text,
  BlockStack,
  DataTable,
  Badge,
  Button,
  Modal,
  ButtonGroup,
  Box,
  ChoiceList,
  TextField,
  EmptyState,
  Pagination,
  Select
} from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'
import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData, useNavigate, useSearchParams } from '@remix-run/react'
import prisma from '../db.server'
import { authenticate } from '../shopify.server'
import { useState, useCallback } from 'react'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request)

  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)
  const page = parseInt(searchParams.get('page') ?? '1')
  const status = searchParams.get('status') ?? 'all'
  const search = searchParams.get('search') ?? ''
  const beachId = searchParams.get('beach') ?? 'all'
  const perPage = 10

  // First get all beaches for the filter dropdown
  const beaches = await prisma.beach.findMany({
    where: { shop: session.shop },
    select: { id: true, name: true },
    orderBy: { name: 'asc' }
  })

  const where = {
    shop: session.shop,
    ...(status === 'published' ? { isPublished: true } : {}),
    ...(status === 'unpublished' ? { isPublished: false } : {}),
    ...(beachId !== 'all' ? { beachId } : {}),
    ...(search
      ? {
          OR: [
            { title: { contains: search } },
            { content: { contains: search } },
            { userName: { contains: search } },
            { userEmail: { contains: search } }
          ]
        }
      : {})
  }

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where,
      include: {
        beach: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * perPage,
      take: perPage
    }),
    prisma.review.count({ where })
  ])

  return json({
    reviews,
    beaches,
    total,
    page,
    totalPages: Math.ceil(total / perPage)
  })
}

export async function action({ request }: LoaderFunctionArgs) {
  const { session } = await authenticate.admin(request)
  const formData = await request.formData()
  const action = formData.get('action')
  const reviewId = formData.get('reviewId') as string

  if (action === 'togglePublish') {
    const review = await prisma.review.findFirst({
      where: { id: reviewId, shop: session.shop }
    })

    if (!review) {
      return json({ error: 'Review not found' }, { status: 404 })
    }

    await prisma.review.update({
      where: { id: reviewId },
      data: { isPublished: !review.isPublished }
    })
  }

  return json({ success: true })
}

interface Beach {
  id: string
  name: string
}

interface Review {
  id: string
  title: string
  content: string
  userName: string
  userEmail: string
  stars: number
  isPublished: boolean
  images: string | null
  createdAt: string
  beach: {
    name: string
    city: string
    country: string
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function ReviewsPage() {
  const { reviews, beaches, total, page, totalPages } = useLoaderData<typeof loader>()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const navigate = useNavigate()

  const handleFiltersChange = useCallback(
    ([value]: string[]) => {
      searchParams.set('status', value)
      searchParams.set('page', '1')
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleBeachChange = useCallback(
    (value: string) => {
      searchParams.set('beach', value)
      searchParams.set('page', '1')
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handleSearchChange = useCallback(
    (value: string) => {
      searchParams.set('search', value)
      searchParams.set('page', '1')
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const handlePageChange = useCallback(
    (value: number) => {
      searchParams.set('page', value.toString())
      setSearchParams(searchParams)
    },
    [searchParams, setSearchParams]
  )

  const togglePublish = useCallback(
    async (reviewId: string) => {
      const formData = new FormData()
      formData.append('action', 'togglePublish')
      formData.append('reviewId', reviewId)
      await fetch('/app/reviews', {
        method: 'POST',
        body: formData
      })
      // Refresh the page to show updated data
      navigate('.', { replace: true })
    },
    [navigate]
  )

  const beachOptions = [
    { label: 'Todas las playas', value: 'all' },
    ...beaches.map((beach: Beach) => ({
      label: beach.name,
      value: beach.id
    }))
  ]

  const rows = reviews.map((review: Review) => [
    <Text variant="bodyMd" as="span">
      {review.title}
      <Text variant="bodySm" as="p" tone="subdued">
        {formatDate(review.createdAt)}
      </Text>
    </Text>,
    <Text variant="bodyMd" as="span">
      {review.userName}
    </Text>,
    <Text variant="bodyMd" as="span">
      {review.beach.name}
    </Text>,
    <Text variant="bodyMd" as="span">
      {review.stars} ★
    </Text>,
    <Badge tone={review.isPublished ? 'success' : 'attention'}>
      {review.isPublished ? 'Publicado' : 'Sin publicar'}
    </Badge>,
    <ButtonGroup>
      <Button onClick={() => setSelectedReview(review)}>Ver</Button>
      <Button onClick={() => togglePublish(review.id)}>
        {review.isPublished ? 'Despublicar' : 'Publicar'}
      </Button>
    </ButtonGroup>
  ])

  return (
    <Page fullWidth>
      <TitleBar title="Gestión de Reseñas" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Box padding="400">
                <BlockStack gap="400">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '16px'
                    }}>
                    <div style={{ flex: 1, maxWidth: '300px' }}>
                      <TextField
                        label="Buscar"
                        labelHidden
                        value={searchParams.get('search') ?? ''}
                        onChange={handleSearchChange}
                        placeholder="Buscar reseñas..."
                        autoComplete="off"
                      />
                    </div>
                    <div style={{ minWidth: '200px' }}>
                      <Select
                        label="Playa"
                        options={beachOptions}
                        onChange={handleBeachChange}
                        value={searchParams.get('beach') ?? 'all'}
                      />
                    </div>
                    <ChoiceList
                      title="Estado"
                      selected={[searchParams.get('status') ?? 'all']}
                      choices={[
                        { label: 'Todas', value: 'all' },
                        { label: 'Publicadas', value: 'published' },
                        { label: 'Sin publicar', value: 'unpublished' }
                      ]}
                      onChange={handleFiltersChange}
                    />
                  </div>

                  {reviews.length > 0 ? (
                    <>
                      <DataTable
                        columnContentTypes={['text', 'text', 'text', 'numeric', 'text', 'text']}
                        headings={[
                          'Título',
                          'Usuario',
                          'Playa',
                          'Calificación',
                          'Estado',
                          'Acciones'
                        ]}
                        rows={rows}
                      />
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                          label={`${total} reseñas`}
                          hasPrevious={page > 1}
                          onPrevious={() => handlePageChange(page - 1)}
                          hasNext={page < totalPages}
                          onNext={() => handlePageChange(page + 1)}
                        />
                      </div>
                    </>
                  ) : (
                    <EmptyState heading="No se encontraron reseñas" image="">
                      <p>No hay reseñas que coincidan con tu búsqueda.</p>
                    </EmptyState>
                  )}
                </BlockStack>
              </Box>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>

      <Modal
        open={selectedReview !== null}
        onClose={() => setSelectedReview(null)}
        title="Detalles de la Reseña">
        <Modal.Section>
          {selectedReview && (
            <BlockStack gap="400">
              <div>
                <Text as="h3" variant="headingMd">
                  Título
                </Text>
                <Text as="p">{selectedReview.title}</Text>
                <Text as="p" tone="subdued">
                  Publicado el {formatDate(selectedReview.createdAt)}
                </Text>
              </div>
              <div>
                <Text as="h3" variant="headingMd">
                  Contenido
                </Text>
                <Text as="p">{selectedReview.content}</Text>
              </div>
              <div>
                <Text as="h3" variant="headingMd">
                  Información del Usuario
                </Text>
                <Text as="p">Nombre: {selectedReview.userName}</Text>
                <Text as="p">Email: {selectedReview.userEmail}</Text>
              </div>
              <div>
                <Text as="h3" variant="headingMd">
                  Playa
                </Text>
                <Text as="p">{selectedReview.beach.name}</Text>
                <Text as="p">
                  {selectedReview.beach.city}, {selectedReview.beach.country}
                </Text>
              </div>
              {selectedReview.images && (
                <div>
                  <Text as="h3" variant="headingMd">
                    Imágenes
                  </Text>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {JSON.parse(selectedReview.images).map((url: string, index: number) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Imagen de reseña ${index + 1}`}
                        style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </BlockStack>
          )}
        </Modal.Section>
      </Modal>
    </Page>
  )
}
