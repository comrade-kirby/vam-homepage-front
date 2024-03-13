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

        return bc === mypath
      })

      set(selected)
    }
  }
}

export const navOpen = writable(false)
export const selected = createSelected()