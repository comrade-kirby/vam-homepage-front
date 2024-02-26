import { STRAPI_API_KEY } from '$env/static/private';
import { group } from 'd3-array'

export async function load({ params }) {
  const response = await fetch("http://localhost:1337/api/works?populate=*", {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })
  const works = await response.json();

  return { works: groupWorks(works)}
}  

const groupWorks = (works) => group(works.data, d=> d.attributes.category, d => d.attributes.client.data.attributes.name)