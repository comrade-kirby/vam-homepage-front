<script>
  import { forceGraph } from '$lib/stores'

  const cancelHover = () => $forceGraph.cancelNavHover()
</script>

<nav on:mouseleave={cancelHover} class="pointer-events-auto overflow-hidden rounded-tr lg:mt-2
  border border-primary-md lg:border-l-0 lg:border-b-0 
  max-w-full col-start-2 row-start-3 col-span-full row-span-1
  lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-full 
">
  <slot />
</nav>
