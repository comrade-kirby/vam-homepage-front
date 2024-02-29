import { STRAPI_API_KEY, VIMEO_CLIENT_ID, VIMEO_SECRET, VIMEO_ACCESS_TOKEN } from '$env/static/private';
import { group } from 'd3-array'
import { Vimeo } from 'vimeo';

const animatedThumbnailUrl="videos/{video_id}/animated_thumbsets"
const thumbnailURL = "https://api.vimeo.com/videos/{video_id}/pictures"
const embed = "GEThttps://vimeo.com/api/oembed.json?url={video_url}"

export async function load({ params }) {
  // const vimeoClient = new Vimeo(VIMEO_CLIENT_ID, VIMEO_SECRET, VIMEO_ACCESS_TOKEN)
  // vimeoClient.request({
  //   method: 'GET',
  //   path: '/tutorial'
  // }, function (error, body, status_code, headers) {
  //   if (error) {
  //     console.log(error);
  //   }

  //   console.log(body);
  // })


  const response = await fetch("http://localhost:1337/api/works?populate=*", {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })
  let works = await response.json();
  
  works = works.data.map(work => {
    
    const oembedData = JSON.parse(work.attributes.videoUrl)
    const videoId = oembedData.rawData.video_id
    
    // const animatedThumbnail = vimeoClient.request({
    //   meghod: 'GET',
    //   path: `videos/${videoId}/animated_thumbsets`
    // })

    return {...work.attributes, oembedData, videoId}
  })

  return { works: groupWorks(works)}
}  

const groupWorks = (works) => group(works, d=> d.category, d => d.client.data.attributes.name)