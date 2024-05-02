<script>
  import { page } from '$app/stores'
  import SiteNavItem from './SiteNavItem/SiteNavItem.svelte'

  const routes = ['works', 'clients', 'press', 'about']

  $: currentRouteIndex = currentRoute && routes.findIndex(route => currentRoute.includes(route))
  $: currentRoute = $page.route.id
</script>

<nav class="pointer-events-auto max-w-4 z-10 col-start-1 row-start-1 col-span-1 row-span-full flex items-end lg:items-start bg-black border-primary-md/80 border-r-2">
  <ul role="list" class="relative flex flex-col mt-20 mb-36 max-w-full">
    {#each routes as route, index}
      <SiteNavItem title={route} selected={index === currentRouteIndex} />
    {/each}
  </ul>
</nav>