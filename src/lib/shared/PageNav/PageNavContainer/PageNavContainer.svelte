<script>
  import { forceGraph } from '$lib/stores'

  const cancelHover = () => $forceGraph.cancelNavHover()
</script>

<nav on:mouseleave={cancelHover} class=" max-w-full pointer-events-auto overflow-hidden 
  rounded-tr border border-primary-md
  col-start-2 row-start-3 col-span-full row-span-1
  lg:min-w-60 lg:max-w-96 lg:mt-2 
  lg:border-l-0 lg:border-b-0 
  lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-full 
">
  <slot />
</nav>
