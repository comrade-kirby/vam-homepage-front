import { writable } from "svelte/store"
import { buildBreadcrumb } from "./helpers"

const createSelected = () => {
  const { subscribe, set, update } = writable(null)

  return {
    subscribe,
    setFromPath: (root, path) => {
      const selected = root.find(d =>  {
        let bc = buildBreadcrumb(root.path(d)) 
        let mypath = `${path}`
        console.log('bc: ', bc)
        console.log('path: ', mypath)

        return bc === mypath
      })
      console.log('selected: ', selected)
      set(selected)
    }
  }
}

export const navOpen = writable(false)
export const selected = createSelected()