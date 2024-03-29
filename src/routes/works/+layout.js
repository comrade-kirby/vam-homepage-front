import { group } from 'd3-array'

export async function load({ parent }) {
  const page = {name: 'Works', slug: '/works'}

  let { works } = await parent();
  works = works.map((work) => ({...work, page}))

  const worksData = group(works, d => d.page, d => d.category)
  
  return { worksData }
}