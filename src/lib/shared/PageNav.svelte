<script>
  import { page } from '$app/stores'

  import { forceGraph, retreatLeft } from '$lib/stores'
  import ContentPane from './ContentPane.svelte';
  import ScrollContainer from './ScrollContainer.svelte';

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

<nav class="relative z-20 {$retreatLeft && '-left-52 z-30'}"
  on:pointerenter={hoverOn}
  on:pointerleave={hoverOff}>

  <ContentPane width="w-96 pl-6" background={$retreatLeft ? 'bg-bg-dark/60' : 'bg-bg-dark/80'} itemsEnd={$retreatLeft}>
    <ScrollContainer opacity={$retreatLeft && 'opacity-70'}>
      <slot center={$retreatLeft}/>
    </ScrollContainer>
  </ContentPane>
</nav>