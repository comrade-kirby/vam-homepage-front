<script>
  import NavItem from './NavItem/NavItem.svelte'
  import CollapseLeftButton from '$lib/CollapseLeftButton.svelte'

  export let openPlayer, forceGraph, breadcrumb

  let navOpen = true
</script>

<nav class="flex flex-col h-full max-w-96 p-4 pl-8 text-black-olive">
  <CollapseLeftButton text="close" />

  {#if  navOpen}
    <ul class="flex flex-col grow w-full space-y-4 ">
      {#each forceGraph.root.children as node}
        <NavItem {node} {forceGraph} {openPlayer} {breadcrumb}/>  
      {/each}
    </ul>
  {/if}

  {#if breadcrumb}
    <p class="p-2 text-sm opacity-60">{breadcrumb}</p>
  {/if}
</nav>