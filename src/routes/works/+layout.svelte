<script>
  import { hierarchy } from 'd3-hierarchy'
  import { page } from '$app/stores'

  import { forceGraph } from '$lib/stores'

  import SubNav from '$lib/SubNav/SubNav.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import PaneHeader from '$lib/shared/PaneHeader.svelte'
  import ScrollContainer from '$lib/shared/ScrollContainer.svelte'

  export let data
  const worksHierarchy = data.worksData && hierarchy(data.worksData)

  $: workPaneOpen = $page.params.slug
</script>

<nav on:pointerleave={() => $forceGraph.cancelNavHover()}>
  <ContentPane  width={workPaneOpen ? 'max-w-64 hover:max-w-96' : 'max-w-96' }>
    <PaneHeader>Works</PaneHeader>

    <ScrollContainer>
      <div class="mt-4">
        {#each worksHierarchy.children as child}
          <SubNav node={child} maxDepth=3 />
        {/each}
      </div>
    </ScrollContainer>
  </ContentPane>
</nav>

<slot />