import { group } from 'd3-array'

export async function load({ parent }) {
  const { works } = await parent();
  
  const worksData = group(works, d => d.category)
  
  return { worksData }
}