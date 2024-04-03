<script>
  import { hierarchy } from 'd3-hierarchy'

  import { page } from '$app/stores'

  import SubNav from './SubNav/SubNav.svelte'
  import SubNavPlaceholder from './SubNavPlaceholder/SubNavPlaceholder.svelte';
    import ContentPane from '$lib/shared/ContentPane.svelte';

  export let forceGraph

  $: detailsOpen = $page.url.pathname.includes('details')
  $: worksHierarchy = $page.data.worksData && hierarchy($page.data.worksData)
  $: clientsHierarchy = $page.data.clientsData && hierarchy($page.data.clientsData)
</script>

<nav on:pointerleave={() => forceGraph.cancelNavHover()}>
  <ContentPane width="max-w-60 { !detailsOpen && 'hover:max-w-96' }">
    <ul class="flex flex-col grow w-full">
      {#if worksHierarchy}
        <SubNav node={worksHierarchy.children[0]} maxDepth=3 {forceGraph} {detailsOpen} />
      {:else}
        <SubNavPlaceholder title="Works" />
      {/if}
      {#if clientsHierarchy}
        <SubNav node={clientsHierarchy.children[0]} maxDepth=2 {forceGraph} {detailsOpen} />
      {:else}
        <SubNavPlaceholder title="Clients" />
      {/if}
      <SubNavPlaceholder title="Press" />
    </ul>
  </ContentPane>
</nav>