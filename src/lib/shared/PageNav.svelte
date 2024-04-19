<script>
  import { page } from '$app/stores'

  import { forceGraph, retreatLeft } from '$lib/stores'
  import PaneNavigation from '$lib/shared/PaneNavigation.svelte'
  import ContentPane from './ContentPane.svelte';
  import ScrollContainer from './ScrollContainer.svelte';
  import VerticalScrollContainer from '$lib/shared/VerticalScrollContainer.svelte';

  const retreatSubRoutes = ['details', 'full-article']
  const isClosable = (pathname) => {
    return (includes, substring) => includes ? !pathname.includes(substring) : includes
  }

  const show = () => retreatLeft.set(false)
  const hide = () => retreatLeft.set(true)
  $: closable = retreatSubRoutes.reduce(isClosable(pathname), true)
  $: pathname = $page.url.pathname
</script>

<!-- DESKTOP NAV -->
<div class="absolute left-0 h-full">

  <nav class="hidden md:flex relative h-full z-20 {$retreatLeft && '-left-1/2'}"
  on:mouseleave={() => $forceGraph.cancelNavHover()}
  >
    <ContentPane width="max-w-96 pl-20" itemsEnd={$retreatLeft}>
      <PaneNavigation {hide} {show} closeUrl={closable && "/"} />
      <ScrollContainer {show}>
        <slot center={$retreatLeft}/>
      </ScrollContainer>
    </ContentPane>
  </nav>
</div>

<!-- MOVILE NAV -->
<nav class="flex md:hidden absolute bottom-0 h-fit w-full pl-10 z-20">
  <ContentPane width="w-full">
    <VerticalScrollContainer>
      <slot test={true} center={$retreatLeft}/>
    </VerticalScrollContainer>
  </ContentPane>
</nav>