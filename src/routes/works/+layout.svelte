<script>
  import { hierarchy } from 'd3-hierarchy'

  import PageNav from '$lib/shared/PageNav/PageNav.svelte'
  import SubNav from '$lib/SubNav/SubNav.svelte'

  export let data
  const worksHierarchy = data.worksData && hierarchy(data.worksData)
</script> 

<PageNav let:minimize>
  {#each worksHierarchy.children as child}
    <SubNav node={child} onClick={minimize} />
  {/each}
</PageNav>

<slot />