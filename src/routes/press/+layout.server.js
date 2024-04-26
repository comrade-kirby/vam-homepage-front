import { STRAPI_API_KEY, CMS_URL } from '$env/static/private'

export async function load({}) {
  const url = `/api/presses?populate[0]=logo&populate[1]=thumbnail`
  const response = await fetch(`${CMS_URL}${url}`, {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })

  let presses = await response.json();
  presses = presses.data.map(press => {
    press.data = {slug: '/press/' + press.attributes.slug}
    return press
  })
  
  return { presses }
}