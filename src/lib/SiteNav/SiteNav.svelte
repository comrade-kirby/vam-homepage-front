<script>
  import { page } from '$app/stores'
  
  import { minimizeDetails, minimizeNav, openContactModal } from '$lib/stores'
  import SiteNavItem from './SiteNavItem/SiteNavItem.svelte'

  const routes = ['works', 'press', 'about']

  $: currentRouteIndex = currentRoute && routes.findIndex(route => currentRoute.includes(route))
  $: currentRoute = $page.route.id
</script>

<nav class="p-3 max-w-full overflow-scroll pointer-events-auto z-10 flex items-end 
  bg-black/90 border-primary-md/80  backdrop-blur
  col-start-1 col-span-full row-start-4 row-span-1 border-t-2
  md:px-8 md:py-12 md:w-fit md:items-start md:border-t-0 md:border-r-2
  md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-full
    ">
  <ul role="list" class="relative flex gap-x-6 w-full justify-center
    md:flex-col">
    {#each routes as route, index}
      <SiteNavItem title={route} selected={index === currentRouteIndex} />
    {/each}
    <SiteNavItem onClick={() => openContactModal.set(true)} title={'contact'} selected={$openContactModal} />
  </ul>
</nav>