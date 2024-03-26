import { STRAPI_API_KEY, VIMEO_CLIENT_ID, VIMEO_SECRET, VIMEO_ACCESS_TOKEN } from '$env/static/private';
import { group } from 'd3-array'

// const animatedThumbnailUrl="videos/{video_id}/animated_thumbsets"
// const thumbnailURL = "https://api.vimeo.com/videos/{video_id}/pictures"
// const embed = "GEThttps://vimeo.com/api/oembed.json?url={video_url}"

export async function load({ params }) {
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
    const slug = `${clientName}/${work.attributes.title}`.replace(/\s+/g, '_').replace('?', '')

    return {id, ...work.attributes, slug, clientName, oembedData, videoId}
  })

  return { works: groupWorks(works), path: params.path }
}  

const groupWorks = (works) => group(works, d=> d.category, d => d.client.data.attributes.name)