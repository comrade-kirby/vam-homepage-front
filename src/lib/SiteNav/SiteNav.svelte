<script>
  import { page } from '$app/stores'
  import { retreatLeft } from '$lib/stores'

  import SiteNavItem from './SiteNavItem/SiteNavItem.svelte';
  import ContentPane from '$lib/shared/ContentPane.svelte';

  const shouldRetreat = (pathname) => pathname.includes('details')
  const hoverOn = () => retreatLeft.set(false)
  const hoverOff = () => retreatLeft.set(shouldRetreat($page.url.pathname))
</script>

<nav class="absolute l-0 t-0 h-full z-40 max-w-16 border-r-2 border-orange-600"
  on:pointerenter={hoverOn}
  on:pointerleave={hoverOff}>
    <ContentPane width="max-w-full" background='bg-bg-darkest'>
    <ul role="list" class="relative flex top-12 flex-col grow max-w-full">
      <SiteNavItem title="Works" />
      <SiteNavItem title="Clients" />
      <SiteNavItem title="Press" />
    </ul>
  </ContentPane>
</nav>