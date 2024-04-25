import { STRAPI_API_KEY, PUBLIC_CMS_URL } from '$env/static/private';

export async function load ({parent, params}) {
  const { works } = await parent()
  
  const workId = works.find(work => work.attributes.slug === params.slug)?.id

  if (!workId) return

  const response = await fetch(`${PUBLIC_CMS_URL}/api/works/${workId}?populate[client][fields][0]=name&populate[client][fields][1]=slug&populate[presses][fields][0]=title&populate[presses][fields][1]=slug&populate[presses][fields][2]=publication`, {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })
      
  let work = await response.json();
  work.data.attributes.presses = work.data.attributes.presses.data.map(press => {
    press.data = {slug: '/press/' + press.attributes.slug}
    return press
  })

  return {work}
}