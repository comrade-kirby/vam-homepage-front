<script>
  import { hierarchy } from 'd3-hierarchy'
  import { page } from '$app/stores'

  import { forceGraph } from '$lib/stores'

  import SubNav from '$lib/SubNav/SubNav.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from '$lib/shared/ScrollContainer.svelte'

  export let data

  const worksHierarchy = data.worksData && hierarchy(data.worksData)
</script>

<nav on:pointerleave={() => $forceGraph.cancelNavHover()}>
  <ContentPane  width='w-80'>
    <ScrollContainer>
      <div class="ml-2 mt-2">
        {#each worksHierarchy.children as child}
          <SubNav node={child} />
        {/each}
      </div>
    </ScrollContainer>
  </ContentPane>
</nav>

<slot />