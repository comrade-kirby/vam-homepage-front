import { items } from '@wix/data'
import { createClient, OAuthStrategy } from '@wix/sdk';

import { group } from 'd3-array'

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '284c68b6-4500-4a6f-a612-fc2827166a30',
    tokens: null
  })
})

export async function load({ params }) {
  const { items } = await wixClient.items.queryDataItems({
    dataCollectionId: 'Works'
  }).find()

  const hydratedtItems = await items.map( async (item) => {
    const clientId = item.data.client
    if (clientId) {
      const client = await wixClient.items.getDataItem(item.data.client, { dataCollectionId: 'Clients'})
      item.data = {...item.data, client}
    }

    return item
  })

  const fulfilled = await Promise.all(hydratedtItems)
  const groupedWorks = group(fulfilled, d => d.data.categories[0], d => d.data.client.data.name)
  
  return { works: groupedWorks}
}  