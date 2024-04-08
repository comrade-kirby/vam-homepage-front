import { group } from 'd3-array'

export async function load({ parent }) {
  let { works } = await parent();
  works = works.map((work) => ({...work, page}))

  const worksData = group(works, d => d.category)
  
  return { worksData }
}