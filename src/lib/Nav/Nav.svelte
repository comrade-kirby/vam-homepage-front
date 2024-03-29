<script>
  import { hierarchy } from 'd3-hierarchy'

  import { page } from '$app/stores'

  import SubNav from './SubNav/SubNav.svelte'
  import SubNavPlaceholder from './SubNavPlaceholder/SubNavPlaceholder.svelte';

  export let forceGraph

  $: detailsOpen = $page.url.pathname.includes('details')
  $: worksHierarchy = $page.data.worksData && hierarchy($page.data.worksData)
  $: clientsHierarchy = $page.data.clientsData && hierarchy($page.data.clientsData)
</script>

<nav class="flex flex-col h-full max-w-60 p-4 pl-8  border-r border-black-olive/10 
  { detailsOpen ? '': 'hover:max-w-96' }">

  <ul class="flex flex-col grow w-full">
    {#if worksHierarchy}
      <SubNav node={worksHierarchy.children[0]} {forceGraph} {detailsOpen} />
    {:else}
      <SubNavPlaceholder title="Works" />
    {/if}
    {#if clientsHierarchy}
      <SubNav node={clientsHierarchy.children[0]} {forceGraph} {detailsOpen} />
    {:else}
      <SubNavPlaceholder title="Clients" />
    {/if}
    <!-- <SubNav {forceGraph} title="Clients"  /> -->
  </ul>
</nav>