<script>
  import { page } from '$app/stores'
  
  import { minimizeDetails, minimizeNav, openContactModal } from '$lib/stores'
  import SiteNavItem from './SiteNavItem/SiteNavItem.svelte'

  const routes = ['works', 'clients', 'press', 'about']

  $: currentRouteIndex = currentRoute && routes.findIndex(route => currentRoute.includes(route))
  $: currentRoute = $page.route.id
</script>

<nav class="pointer-events-auto max-w-4 z-10 flex items-end lg:items-start bg-black border-primary-md/80 border-r-2
  col-start-1 row-start-1 col-span-1 row-span-full ">
  <ul role="list" class="relative flex flex-col mt-20 max-w-full {
    $minimizeNav
      ? $minimizeDetails
        ? 'mb-26 md:mb-36'
        : 'mb-14 md:mb-20'
      : 'mb-4'
  }">
    {#each routes as route, index}
      <SiteNavItem title={route} selected={index === currentRouteIndex} />
    {/each}
    <SiteNavItem onClick={() => openContactModal.set(true)} title={'contact'} selected={$openContactModal} />
  </ul>
</nav>