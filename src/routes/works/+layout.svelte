<script>
  import { hierarchy } from 'd3-hierarchy'

  import { PageNav, SubNav } from '$lib'

  export let data
  const worksHierarchy = hierarchy(data.graphData)
</script> 

<PageNav route="/works">
  {#each worksHierarchy.children as child}
    <SubNav node={child} expanded />
  {/each}
</PageNav>

<slot />