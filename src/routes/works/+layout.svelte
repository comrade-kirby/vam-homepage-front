<script>
  import { hierarchy } from 'd3-hierarchy'

  import { PageNav, SubNav } from '$lib'

  export let data
  const worksHierarchy = data.worksData && hierarchy(data.worksData)
</script> 

<PageNav let:onClick route="/works">
  {#each worksHierarchy.children as child}
    <SubNav node={child} {onClick} />
  {/each}
</PageNav>

<slot />