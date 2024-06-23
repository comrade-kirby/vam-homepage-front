<script>
  import { Progress } from 'bits-ui'

  export let logs, progress
  let wait = true
  let timeout = null

  const endAwait = (trigger) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        wait = false
      }, 800)
  }
  $: totalCount = logs.total.size
  $: endAwait(totalCount)
  $: completeCount = logs.complete.size 
  $: percentage = wait ? 0 : progress
</script>

<Progress.Root
  value={completeCount}
  max={totalCount}
  class="relative h-1 w-[40%] max-w-128 min-w-52 overflow-hidden rounded-full my-4"
>
  <div class="h-full aspect-square bg-orange-400 absolute left-0 z-20 rounded-full" />

  <div
    class="h-full w-[200%] flex rounded-full transition-all duration-1000 ease-in-out"
    style={`transform: translateX(-${((100 - percentage) * 0.5)}%`}
  >
    <div class="h-full flex-grow bg-orange-400 rounded-full mr-3" />
    <div class="h-full flex-grow bg-blue-100 rounded-full " />
  </div>
</Progress.Root>