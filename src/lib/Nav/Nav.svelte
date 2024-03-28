<script>
  import { hierarchy } from 'd3-hierarchy'

  import { page } from '$app/stores'
  import { sanitizeString } from '$lib/helpers'

  import SubNav from './SubNav/SubNav.svelte'
  import SubNavPlaceholder from './SubNavPlaceholder/SubNavPlaceholder.svelte';

  export let forceGraph

  const createSlug = (node) => {
    switch (node.height) {
      case 1: return 'works/' + sanitizeString(node.data[0])
      case 2: return 'works'
    }
  }

  const createHierarchy = (worksData) => {
    const root = hierarchy(worksData)
    root.data[0] = "Works"
    root.eachAfter(d => {
      d.data.slug ||= createSlug(d)
    })
    return root
  }

  $: detailsOpen = $page.url.pathname.includes('details')
  $: navHierarchy = $page.data.worksData && createHierarchy($page.data.worksData)
</script>

<nav class="flex flex-col h-full max-w-60 p-4 pl-8  border-r border-black-olive/10 
  { detailsOpen ? '': 'hover:max-w-96' }">

  <ul class="flex flex-col grow w-full">
    {#if navHierarchy}
      <SubNav node={navHierarchy} {forceGraph} {detailsOpen} />
    {:else}
      <SubNavPlaceholder title="Works" />
    {/if}
    <!-- <SubNav {forceGraph} title="Clients"  /> -->
  </ul>
</nav>