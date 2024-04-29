<script>
  import { hierarchy } from 'd3-hierarchy'

  import PageNav from '$lib/shared/PageNav/PageNav.svelte'
  import SubNav from '$lib/SubNav/SubNav.svelte'

  export let data
  const worksHierarchy = data.worksData && hierarchy(data.worksData)
</script> 

<PageNav let:onClick route="/works">
  {#each worksHierarchy.children as child}
    <SubNav node={child} {onClick} />
  {/each}
</PageNav>

<div class="h-1/2 flex flex-1 justify-end flex-col md:flex-none md:h-full md:w-1/2">
  <slot />
</div>