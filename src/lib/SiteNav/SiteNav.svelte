<script>
  import { page } from '$app/stores'
  import SiteNavItem from './SiteNavItem/SiteNavItem.svelte'

  const routes = ['works', 'clients', 'press', 'about']

  $: currentRouteIndex = currentRoute && routes.findIndex(route => currentRoute.includes(route))
  $: currentRoute = $page.route.id
</script>

<nav class="flex flex-col justify-end md:justify-start h-full max-w-6 pl-2 z-40 bg-bg-darkest/90 border-r-2 border-bprimary/80">
  <ul role="list" class="relative flex flex-col mt-12 mb-24 max-w-full">
    {#each routes as route, index}
      <SiteNavItem title={route} selected={index === currentRouteIndex} />
    {/each}
  </ul>
</nav>