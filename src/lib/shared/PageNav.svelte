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

<nav class="relative h-full z-20 {$retreatLeft && '-left-52'}"
  on:mouseenter={hoverOn}
  on:mouseleave={hoverOff}
>
  <ContentPane width="max-w-96 pl-20" background={$retreatLeft ? 'bg-bg-darkest/60' : 'bg-bg-dark/60'} itemsEnd={$retreatLeft}>
    <ScrollContainer onTouch={hoverOn}>
      <slot center={$retreatLeft}/>
    </ScrollContainer>
  </ContentPane>
</nav>