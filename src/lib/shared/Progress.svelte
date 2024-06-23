<script>
  import { Progress } from 'bits-ui'

  export let logs, progress
  let wait = true
  let timeout = null

  const endAwait = (trigger) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        wait = false
      }, 500)
  }
  $: totalCount = logs.total.size
  $: endAwait(totalCount)
  $: completeCount = logs.complete.size 
  $: percentage = wait ? 0 : progress
</script>

<Progress.Root
  value={completeCount}
  max={totalCount}
  class="relative h-1 w-[40%] max-w-128 min-w-52 overflow-hidden rounded-full bg-blue-100 shadow-mini-inset my-4"
>
  <div
    class="h-full w-full flex-1 rounded-full bg-orange-400 shadow-mini-inset transition-all duration-1000 ease-in-out"
    style={`transform: translateX(-${(100 - percentage)}%`}
  />
</Progress.Root>