import { STRAPI_API_KEY, CMS_URL } from '$env/static/private'

export async function load({}) {
  const url = `/api/clients?populate[0]=works&populate[1]=logo`
  const response = await fetch(`${CMS_URL}${url}`, {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })

  let clients = await response.json();
  clients = clients.data.map(client => {
    client.data = {slug: '/clients/' + client.attributes.slug}
    return client
  })
  
  return { clients }
}