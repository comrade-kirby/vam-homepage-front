<script>
  import { page } from '$app/stores'
  import SiteNavItem from './SiteNavItem/SiteNavItem.svelte'

  const routes = ['works', 'clients', 'press', 'about']

  $: currentRouteIndex = currentRoute && routes.findIndex(route => currentRoute.includes(route))
  $: currentRoute = $page.route.id
</script>

<nav class="flex flex-col justify-end z-40 h-full max-w-6 bg-bg-darkest/90 border-bprimary/80 pr-2 border-l-2 md:pr-0 md:pl-2 md:justify-start md:border-l-0 md:border-r-2">
  <ul role="list" class="relative flex flex-col items-end md:items-start mt-12 mb-24 max-w-full">
    {#each routes as route, index}
      <SiteNavItem title={route} selected={index === currentRouteIndex} />
    {/each}
  </ul>
</nav>