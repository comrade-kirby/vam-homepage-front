<script>
  import { page } from '$app/stores'

  import { forceGraph } from '$lib/stores'

  export let minimized

  const cancelHover = () => $forceGraph.cancelNavHover()
</script>

<nav on:mouseleave={cancelHover} class="pointer-events-auto relative border-t md:border-t-0 md:border-r border-bprimary/80 { 
  minimized
    ? 'w-full h-fit self-end md:w-1/2 md:self-start md:border-b'
    : 'h-1/2 w-full flex-auto md:h-screen md:max-w-fit'
}">
  <slot />
</nav>
