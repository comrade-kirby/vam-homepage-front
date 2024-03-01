import { VIMEO_ACCESS_TOKEN } from '$env/static/private';

export async function GET({params}) {
  const videoId = params.videoId

  return await fetch(`https://api.vimeo.com/videos/${videoId}/animated_thumbsets`, {
    method: 'GET',
    headers: {
      'Authorization': `bearer ${VIMEO_ACCESS_TOKEN}` 
    }
  })
}