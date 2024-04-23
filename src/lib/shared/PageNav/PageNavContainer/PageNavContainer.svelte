<script>
  import { page } from '$app/stores'

  import { forceGraph } from '$lib/stores'

  export let minimized

  const hideSubRoutes = ['details', 'full-article']
  
  const cancelHover = () => $forceGraph.cancelNavHover()
  const isHidePath = (pathname) => (includes, substring) => includes ? includes : pathname.includes(substring)
  
  $: pathname = $page.url.pathname
  $: hideMobile = hideSubRoutes.reduce(isHidePath(pathname), false)
</script>

<nav on:mouseleave={cancelHover} class="relative z-30 border-t md:border-t-0 md:border-r border-orange-600/80 { 
  minimized
    ? 'order-first self-end h-fit md:border-b md:self-start w-full md:w-1/2'
    : 'order-1 flex-1 h-1/2 md:h-screen w-full md:w-fit'
}">
  <slot />
</nav>
