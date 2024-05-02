import { writable } from 'svelte/store'
import { tweened } from 'svelte/motion'
import { backOut } from 'svelte/easing'

import { createCameraZoom, createSelected } from './customStores'

export const selected = createSelected()
export const selectedVideoPlayer = writable(null)
export const cameraZoom = createCameraZoom()
export const selectedPaused = writable(false)
export const selectedVolume = writable(0)
export const forceGraph = writable(null)
export const minimizeNav = writable(false)
export const root = writable(null)
export const cameraTarget = tweened([0, 0, 40], {
  duration: 1000,
  easing: backOut,
})