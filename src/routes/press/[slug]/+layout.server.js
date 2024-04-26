import { STRAPI_API_KEY, CMS_URL } from '$env/static/private';

export async function load({params}) {
  const url = `/api/presses?filters[slug][$eq]=${params.slug}&populate[0]=logo&populate[1]=thumbnail`

  const response = await fetch(`${CMS_URL}${url}`, {
    headers: {
      'Authorization': `bearer ${STRAPI_API_KEY}` 
    }
  })

  let press = await response.json();
  press = press.data[0]

  return { press }
}
