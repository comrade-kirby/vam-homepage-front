import { STRAPI_API_KEY } from '$env/static/private';

export async function load ({parent, params}) {
  const { works } = await parent()
  
  const workId = works.find(work => work.attributes.slug === params.slug)?.id

  if (!workId) return

  const response = await fetch(`http://localhost:1337/api/works/${workId}?populate[client][fields][0]=name&populate[client][fields][1]=slug&populate[presses][fields][0]=title&populate[presses][fields][1]=slug&populate[presses][populate][0]=logo`, {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })
      
  let work = await response.json();
  
  return {work}
}