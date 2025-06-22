import db from '../db.server'
import { handleize } from '@/utils'

//get all pages
export async function getPages(shop: string) {
  const beachs = await db.page.findMany({
    where: { shop },
    orderBy: { id: 'desc' }
  })

  if (beachs.length === 0) return []

  return beachs
}

//get a page with the id
export async function getPage(id: string) {
  const page = await db.page.findFirst({
    where: { id }
  })

  if (!page) return null

  return page
}

//create a page in shopify and db
export async function createPage(name: string, shop: string, graphql: any, beachId: string) {
  const res = await graphql(
    `
      mutation CreatePage($page: PageCreateInput!) {
        pageCreate(page: $page) {
          page {
            id
            title
            handle
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `,
    {
      variables: {
        page: {
          title: name,
          handle: handleize(name),
          body: 'This is the content of the page.',
          isPublished: true
        }
      }
    }
  )

  const responseData = await res.json()
  const pageData = responseData?.data?.pageCreate?.page
  const userErrors = responseData?.data?.pageCreate?.userErrors

  if (!pageData || userErrors?.length) {
    console.error('GraphQL Error:', userErrors)
    throw new Error('Error creating page in Shopify')
  }

  const created = await db.page.create({
    data: {
      title: pageData.title,
      slug: pageData.handle,
      shop: shop,
      shopifyId: pageData.id,
      beach: {
        connect: { id: beachId }
      }
    }
  })

  console.log('CREATED:', created)

  return created
}

//delete a page with the id
export async function deletePage(pageId: string, graphql: any) {
  const res = await graphql(
    `
      mutation DeletePage($id: ID!) {
        pageDelete(id: $id) {
          deletedPageId
          userErrors {
            code
            field
            message
          }
        }
      }
    `,
    { variables: { id: pageId } }
  )
  const response = await res.json()
  const resData = response?.data?.pageDelete?.deletedPageId
  const userErrors = response?.data?.pageDelete?.userErrors

  if (!resData || userErrors?.length) {
    console.error('GraphQL Error:', userErrors)
    throw new Error('Error deleteing page in Shopify')
  }
}
