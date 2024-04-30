import { spring } from "svelte/motion"

export const createCameraZoom = () => {
  const { subscribe, set, update } = spring(0.5, {damping: 0.65})

  const zoomStops = [0.25, 0.5, 1, 2, 4]
  const maxZoom = zoomStops[zoomStops.length -1]
  const minZoom = zoomStops[0]

  const setMaxZoom = () => {
    set(maxZoom)
  }

  const setZoomByIndex = (index) => {
    console.log(index)
    set(zoomStops[index])
  }

  const zoomIn = () => {
    update(prev => {
      if (prev >= maxZoom) return maxZoom

      const nextStop = zoomStops.reduce((acc, stop) => {
        const diff = stop - prev

        if (diff <= 0 || diff > acc.diff) return acc
       
        return { value: stop, diff }
     }, { diff: 100 })

     return nextStop.value
    })
  }
  
  const zoomOut = () => {
    update(prev => {
      if (prev <= minZoom) return minZoom

      const nextStop = zoomStops.reduce((acc, stop) => {
        const diff = stop - prev

        if (diff >= 0 || diff < acc.diff) return acc
       
        return { value: stop, diff }
      }, { diff: -100 })

     return nextStop.value
    })
  }

  return {subscribe, zoomIn, zoomOut, setZoomByIndex, setMaxZoom}
}