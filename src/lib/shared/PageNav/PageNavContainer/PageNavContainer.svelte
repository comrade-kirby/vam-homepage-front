<script>
  import { forceGraph } from '$lib/stores'

  const cancelHover = () => $forceGraph.cancelNavHover()
</script>

<nav on:mouseleave={cancelHover} class="pointer-events-auto border-primary-md/80 overflow-hidden
  max-w-full col-start-2 row-start-3 col-span-4 row-span-1 border-t lg:border-t-0
  lg:w-80 lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-full lg:border-r
">
  <slot />
</nav>
