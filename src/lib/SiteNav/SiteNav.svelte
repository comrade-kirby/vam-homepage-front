<script>
  import { page } from '$app/stores'
  import { retreatLeft } from '$lib/stores'

  import SiteNavItem from './SiteNavItem/SiteNavItem.svelte';
  import ContentPane from '$lib/shared/ContentPane.svelte';

  const shouldRetreat = (pathname) => pathname.includes('details')
  const hoverOn = () => retreatLeft.set(false)
  const hoverOff = () => retreatLeft.set(shouldRetreat($page.url.pathname))
</script>

<nav class="relative z-40 -ml-10 border-r-2 border-bg-dark"
  on:pointerenter={hoverOn}
  on:pointerleave={hoverOff}>
  <ContentPane width="w-fit" background={$retreatLeft ? 'bg-bg-darkest/90' : 'bg-bg-darkest/100'}>
    <ul role="list" class="relative flex top-12 flex-col grow w-fit">
      <SiteNavItem title="Works" />
      <SiteNavItem title="Clients" />
      <SiteNavItem title="Press" />
    </ul>
  </ContentPane>
</nav>