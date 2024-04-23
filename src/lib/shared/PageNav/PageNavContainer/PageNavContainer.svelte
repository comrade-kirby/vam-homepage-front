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

<nav on:mouseleave={cancelHover} class="relative z-30 w-full md:w-fit { 
  minimized
    ? 'self-end h-fit md:h-full md:-left-64'
    : 'h-full'
} { 
  hideMobile && 'hidden md:block'
}">
  <slot />
</nav>
