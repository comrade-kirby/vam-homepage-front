import { items } from '@wix/data'
import { createClient, OAuthStrategy } from '@wix/sdk';

const wixClient = createClient({
  modules: {
    items
  },
  auth: OAuthStrategy({
    clientId: '284c68b6-4500-4a6f-a612-fc2827166a30',
    tokens: null
  })
})

export async function load({ params }) {
  

  // console.log(wixClient)
  const { items } = await wixClient.items.queryDataItems({
    dataCollectionId: 'Works'
  }).find();

  return {works: items}
}