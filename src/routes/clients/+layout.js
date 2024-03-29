import { group } from 'd3-array'

export async function load({ parent }) {
  const page = {name: 'Clients', slug: '/clients'}
  
  let { works } = await parent();
  works = works.map((work) => ({...work, page}))
  
  const clientsData = group(works, d => d.page, d => d.client)
  
  return { clientsData }
}