import { STRAPI_API_KEY } from '$env/static/private'

export async function load({}) {
  const url = `/api/presses?populate[0]=logo&populate[1]=thumbnail`
  const response = await fetch(`http://localhost:1337${url}`, {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })

  let presses = await response.json();
  presses = presses.data
  
  return { presses }
}