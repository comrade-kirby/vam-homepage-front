import { writable } from "svelte/store"
import { buildBreadcrumb } from "./helpers"

const createFocused = () => {
  const { subscribe, set } = writable(null)

  return {
    subscribe,
    setFromPath: (selected, index) => {
      console.log('selected: ', selected)
      const relatedWorks = selected?.data?.relatedWorks
      
      const focused = relatedWorks && relatedWorks[index]
      set(focused)
    }
  }
}

const createSelected = () => {
  const { subscribe, set, update } = writable(null)

  return {
    subscribe,
    setFromPath: (root, path) => {
      const selected = root.find(d =>  buildBreadcrumb(root.path(d)) === `/${path}`)
      set(selected)
    }
  }
}

export const navOpen = writable(false)
export const selected = createSelected()
export const focused = createFocused()