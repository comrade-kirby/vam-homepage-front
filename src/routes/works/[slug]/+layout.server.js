import { STRAPI_API_KEY, CMS_URL } from '$env/static/private';

export async function load ({parent, params}) {
  const { works } = await parent()
  
  const headers = {'Authorization': `bearer ${STRAPI_API_KEY}` }

  const workId = works.find(work => work.attributes.slug === params.slug)?.id
  if (!workId) {
    const clientUrl = `/api/clients?filters[slug][$eq]=${params.slug}&populate[presses][fields][0]=title&populate[presses][fields][1]=slug&populate[presses][fields][2]=publication&populate[presses][populate][0]=logo&populate[works][fields][0]=title&populate[works][fields][1]=slug&populate[works][fields][2]=vimeoUrl&populate[works][populate][0]=client`
    const clientResponse = await fetch(`${CMS_URL}${clientUrl}`, { headers })
    
    let client = await clientResponse.json();
    
    client = client.data[0]
    if (!client) return 

    client.type = 'client'
    client.attributes.works.data.forEach(work => {
      work.attributes.client = work.attributes.client.data.attributes
      work.attributes.slug = '/works/' + work.attributes.slug
      work.attributes.oembedData = JSON.parse(work.attributes.vimeoUrl)
    });
  
    return { client }
  }

  const workUrl = `/api/works/${workId}?populate[client][fields][0]=name&populate[client][fields][1]=slug&populate[presses][fields][0]=title&populate[presses][fields][1]=slug&populate[presses][fields][2]=publication`
  
  const workResponse = await fetch(`${CMS_URL}${workUrl}`, { headers })
      
  let work = await workResponse.json()
  
  work.type = 'work'
  work.data.attributes.presses = work.data.attributes.presses.data.map(press => {
    press.data = {slug: '/press/' + press.attributes.slug}
    return press
  })

  return { work }
}