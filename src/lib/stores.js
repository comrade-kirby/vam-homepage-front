import { writable } from "svelte/store"
import { spring, tweened } from 'svelte/motion'

import { backIn, backOut, bounceOut, circIn, elasticInOut } from "svelte/easing"

const createSelected = () => {
  const { subscribe, set, update } = writable(null)

  return {
    subscribe,
    set,
    setFromPath: (root, path) => {
      const selected = root.find(d => d.data.slug === path)
      set(selected)
    }
  }
}

export const selected = createSelected()
export const cameraFocalLength = spring(18, { damping: 0.5 })

export const cameraTarget = tweened([0, 0, 40], {
  easing: backOut,
})