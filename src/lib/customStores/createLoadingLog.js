import { writable } from "svelte/store"

export const createLoadingLog = () => {
  const { subscribe, update} = writable({
    'force-graph-initialize': {
      state: null,
      onStarted: 'initializing force graph...',
      onComplete: 'force graph initialized.'
    },
    'force-graph-attach': {
      state: null,
      onStarted: 'attaching force graph...',
      onComplete: 'force graph attached.'
    },
    'import-3d-force-graph': {
      state: null,
      onStarted: 'importing 3d-force-graph module...',
      onComplete: '3d-force-graph module imported.'
    },
    'add-works': {
      state: null,
      onStarted: 'adding works...',
      onComplete: 'works added.'
    },
    'load-wave': {
      state: null,
      onStarted: 'loading wave model...',
      onComplete: 'wave model added.'
    },
    'engine': {
      state: null,
      onStarted: 'cooling down force graph engine...',
      onComplete: 'engine stopped.'
    },
    'load-videos': {
      state: null,
      multiple: true,
      loadedCount: 0,
      totalCount: 0,
      onStarted: 'loading videos...',
      onComplete: 'videos loaded.'
    }
  })

  const start = (logId) => {
    update((prev) => {
      const log = prev[logId]
      
      if (log.multiple) {
        log.totalCount ++
        log.onStarted = `loading videos... [${log.loadedCount}/${log.totalCount}]`
      } 

      log.state ||= 'started'
      log.startTime ||= new Date()

      return prev
    })
  }
  
  const complete = (logId) => {
    update((prev) => {
      const log = prev[logId]

      if (log.multiple) {
        log.loadedCount ++
        log.onStarted = `loading videos... [${log.loadedCount}/${log.totalCount}]`
        
        if (log.loadedCount === log.totalCount) {
          log.state = 'complete'
          log.onComplete = `videos loaded. [${log.loadedCount}/${log.totalCount}]`
        }
      } else {
        log.state = 'complete'
        log.startTime ||= new Date()
      }

      return prev
    })
  }
  
  return { subscribe, start, complete }
}