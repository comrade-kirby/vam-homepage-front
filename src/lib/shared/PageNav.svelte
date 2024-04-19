<script>
  import { page } from '$app/stores'

  import { forceGraph, retreatLeft } from '$lib/stores'
  import ContentPane from './ContentPane.svelte';
  import ScrollContainer from './ScrollContainer.svelte';
  import VerticalScrollContainer from '$lib/shared/VerticalScrollContainer.svelte';

  const retreatSubRoutes = ['details', 'full-article']
  const shouldRetreat = () => retreatSubRoutes.reduce(isRetreatRoute, false)
  const isRetreatRoute = (includes, substring) => includes ? true : pathname.includes(substring)

  const hoverOn = () => retreatLeft.set(false)
  const hoverOff = () => {
    $forceGraph.cancelNavHover()
    retreatLeft.set(shouldRetreat())
  }

  $: pathname = $page.url.pathname
</script>

<!-- DESKTOP NAV -->
<nav class="hidden md:flex relative h-full z-20 {$retreatLeft && '-left-52'}"
  on:mouseenter={hoverOn}
  on:mouseleave={hoverOff}
>
<!-- <ContentPane width="max-h-full w-full pl-8"> -->
  <ContentPane width="max-w-96 pl-20" itemsEnd={$retreatLeft}>
    <ScrollContainer onTouch={hoverOn}>
      <slot center={$retreatLeft}/>
    </ScrollContainer>
  </ContentPane>
</nav>

<!-- MOVILE NAV -->
<nav class="flex md:hidden absolute bottom-0 h-fit w-full pl-10 z-20 bg-orange-500">
  <ContentPane>
    <VerticalScrollContainer>
      <slot test={true} center={$retreatLeft}/>
    </VerticalScrollContainer>
  </ContentPane>
</nav>