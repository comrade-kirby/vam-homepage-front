import { writable } from 'svelte/store'

export const createSelected = () => {
  const { subscribe, set } = writable(null)

  const setFromPath = (root, path) => {
    const trimmedPath = path.replace('/details', '')
    const selected = root.find(d => {
      const slug = d.data[0] ? d.data[0].slug : d.data.slug
      
      return slug === trimmedPath
    })
    
    set(selected)
  }

  return { subscribe, set, setFromPath}
}