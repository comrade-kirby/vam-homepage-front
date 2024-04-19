import { STRAPI_API_KEY } from '$env/static/private'

export async function load({}) {
  const url = `/api/clients?populate[0]=works&populate[1]=logo`
  const response = await fetch(`http://localhost:1337${url}`, {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })

  let clients = await response.json();
  clients = clients.data.map(client => {
    client.data = {slug: client.attributes.slug}
    return client
  })
  
  return { clients }
}