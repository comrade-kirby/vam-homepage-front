import { group } from 'd3-array'
import { STRAPI_API_KEY, VIMEO_CLIENT_ID, VIMEO_SECRET, VIMEO_ACCESS_TOKEN } from '$env/static/private';


export async function load({}) {
  const response = await fetch("http://localhost:1337/api/works?populate=*", {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })
  
  let works = await response.json();

  works = works.data.map(work => {
    const { id } = work
    const clientName = work.attributes.client.data.attributes.name
    const oembedData = JSON.parse(work.attributes.vimeoUrl)
    const videoId = oembedData?.rawData?.video_id
    work.attributes.slug = 'works/' + work.attributes.slug
    // work.attributes.client.data.attributes.slug =

    return {id, ...work.attributes, clientName, oembedData, videoId}
  })

  return { works, graphData: graphData(works) }
}  

const graphData = (works) => group(works, d => d.category, d => d.client.data.attributes)