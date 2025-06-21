import db from '../db.server'
import { createPage } from './Page.server'
import { parseCoordinates } from '@/utils'

export async function getBeaches(shop: string) {
  const beachs = await db.beach.findMany({
    where: { shop },
    orderBy: { id: 'desc' }
  })

  if (beachs.length === 0) return []

  return beachs
}

export async function getBeach(id: string) {
  const beach = await db.beach.findFirst({
    where: { id }
  })

  if (!beach) return null

  return beach
}

export async function createBeach(data: any, graphql: any) {
  const { name, shop } = data
  console.log('name: ', name)
  try {
    const response = await db.beach.create({ data })
    if (response) {
      await createPage(name, shop, graphql, response.id)
      await updateMapMetafield(data, graphql, shop)
      // TODO: add new update the metafield for beach global points
      // structure: {name: string, coordinates: string, slug: string, city: string, reviews: string - soon}
      // simplified structure: {name:string, coordinates: {lat: string ,lon: string}, slug: string}}
    }
  } catch (err) {
    console.error('Error', err)
  }
}

export async function updateMapMetafield(data: any, graphql: any, shop: any) {
  const metafield = await checkMetafield(graphql, {
    first: 1,
    ownerType: 'PAGE',
    namespace: 'map_dryhood',
    key: 'beach_data'
  })

  console.log('METAFIELD_VALIDATION:', metafield)

  if (!metafield) {
    console.log('Entramos a crear metafield desde cero')
    //Create the metafield with all the information from the data base
    await createMetafieldDefinition(graphql)
    await createBeachDataMetafield(graphql, shop)
  } else {
    console.log('Actualizar metafield')
    //Get the current metafield values from the page
    //update data from the in the metafield
    //update
    await upsertBeachDataMetafield(graphql, shop)
    // await updateBeachDataMetafield(graphql, shop)
  }
  // get the current metafield if is not created need to be created with all information from the data base
  // in case if is exist need to append to last register for a new register
  // in the case of delete need find the register and remove this
  // the metafield will page.metafields.beach_map.value as a json
}

type MetafieldParams = {
  first: number
  ownerType: 'PRODUCT' | 'PAGE' | 'COLLECTION' | 'CUSTOMER' | 'ORDER' | string
  namespace: string
  key: string
}

export async function checkMetafield(
  graphql: any,
  { first, ownerType, namespace, key }: MetafieldParams
): Promise<boolean> {
  const res = await graphql(
    `
      query CheckPageMetafieldDefinition(
        $first: Int!
        $ownerType: MetafieldOwnerType!
        $namespace: String!
        $key: String!
      ) {
        metafieldDefinitions(
          first: $first
          ownerType: $ownerType
          namespace: $namespace
          key: $key
        ) {
          nodes {
            id
            name
            namespace
            key
          }
        }
      }
    `,
    {
      variables: {
        first,
        ownerType,
        namespace,
        key
      }
    }
  )

  const response = await res.json()
  const definitions = response?.data?.metafieldDefinitions?.nodes
  return definitions && definitions.length > 0
}

export async function createMetafieldDefinition(graphql: any) {
  const res = await graphql(
    `
      mutation CreatePageMetafieldDefinition($definition: MetafieldDefinitionInput!) {
        metafieldDefinitionCreate(definition: $definition) {
          createdDefinition {
            id
            name
            namespace
            key
          }
          userErrors {
            field
            message
            code
          }
        }
      }
    `,
    {
      variables: {
        definition: {
          name: 'Data de playas',
          namespace: 'map_dryhood',
          key: 'beach_data',
          description: 'Data de las playas para el mapa',
          type: 'json',
          ownerType: 'PAGE'
        }
      }
    }
  )
  const response = await res.json()
  //const metafieldData = response?.data?.metafieldDefinitionCreate?.createdDefinition
  const userErrors = response?.data?.metafieldDefinitionCreate?.userErrors

  if (!response || userErrors?.length) {
    console.error('GraphQL Error:', userErrors)
    throw new Error('Error creating metafield in Shopify')
  }
}

export async function createBeachDataMetafield(graphql: any, shop: any) {
  // hardcoded por ahora
  const PAGE_ID = 'gid://shopify/Page/112733946053'
  const beaches = await db.beach.findMany({
    where: { shop },
    include: {
      page: true
    },
    orderBy: { id: 'desc' }
  })

  //console.log('BEACHES:', beaches)

  const value = JSON.stringify(
    beaches.map((beach) => ({
      name: beach.name,
      coordinates: parseCoordinates(beach.coordinates),
      slug: beach?.page?.slug
    }))
  )

  //console.log('VALUE:', value)

  const res = await graphql(
    `
      mutation CreatePageJsonMetafield($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            id
            namespace
            key
            type
            value
          }
          userErrors {
            field
            message
            code
          }
        }
      }
    `,
    {
      variables: {
        metafields: [
          {
            ownerId: PAGE_ID,
            namespace: 'map_dryhood',
            key: 'beach_data',
            type: 'json',
            value
          }
        ]
      }
    }
  )

  const response = await res.json()
  const userErrors = response?.data?.metafieldsSet?.userErrors

  if (!response || userErrors?.length) {
    console.error('GraphQL Error:', userErrors)
    throw new Error('Error creating beach metafield for page')
  }
}

export async function upsertBeachDataMetafield(graphql: any, shop: any) {
  // hardcoded por ahora
  const PAGE_ID = 'gid://shopify/Page/112733946053'
  const beaches = await db.beach.findMany({
    where: { shop },
    include: {
      page: true
    },
    orderBy: { id: 'desc' }
  })

  //console.log('BEACHES:', beaches)

  const value = JSON.stringify(
    beaches.map((beach) => ({
      name: beach.name,
      coordinates: parseCoordinates(beach.coordinates),
      slug: beach?.page?.slug
    }))
  )

  const res = await graphql(
    `
      mutation UpdatePageJsonMetafield($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            id
            namespace
            key
            type
            value
          }
          userErrors {
            field
            message
            code
          }
        }
      }
    `,
    {
      variables: {
        metafields: [
          {
            key: 'beach_data',
            namespace: 'map_dryhood',
            ownerId: PAGE_ID,
            type: 'json',
            value: value
          }
        ]
      }
    }
  )

  const response = await res.json()
  const userErrors = response?.data?.metafieldsSet?.userErrors

  if (!response || userErrors?.length) {
    console.error('GraphQL Error:', userErrors)
    throw new Error('Error creating beach metafield for page')
  }
}

// mutation UpdatePageJsonMetafield {
//   metafieldsSet(metafields: [
//     {
//       key: "your_key"
//       namespace: "your_namespace"
//       ownerId: "gid://shopify/Page/123456789"
//       type: "json"
//       value: "{\"foo\": \"bar\", \"baz\": 123}"
//     }
//   ]) {
//     metafields {
//       id
//       namespace
//       key
//       type
//       value
//     }
//     userErrors {
//       field
//       message
//       code
//     }
//   }
// }
