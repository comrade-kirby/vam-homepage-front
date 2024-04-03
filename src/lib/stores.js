import { writable } from "svelte/store"
import { spring, tweened } from 'svelte/motion'
import { backOut } from "svelte/easing"

const createSelected = () => {
  const { subscribe, set, update } = writable(null)

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


export const selected = createSelected()
export const cameraFocalLength = spring(18, { damping: 0.5 })
export const root = writable(null)
export const cameraTarget = tweened([0, 0, 40], {
  duration: 1000,
  easing: backOut,
})