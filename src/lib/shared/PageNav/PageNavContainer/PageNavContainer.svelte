<script>
  import { page } from '$app/stores'

  import { forceGraph } from '$lib/stores'

  export let minimized

  const cancelHover = () => $forceGraph.cancelNavHover()
</script>

<nav on:mouseleave={cancelHover} class="pointer-events-auto relative border-t md:border-t-0 md:border-r border-bprimary/80 { 
  minimized
    ? 'order-first self-end h-fit md:border-b md:self-start w-full md:w-1/2'
    : 'order-1 flex-1 h-1/2 md:h-screen w-full md:max-w-fit'
}">
  <slot />
</nav>
