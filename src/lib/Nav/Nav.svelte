<script>
  import NavItem from './NavItem/NavItem.svelte';

  export let openPlayer, forceGraph, breadcrumb

  let navOpen = true
</script>

<nav class="flex flex-col absolute top-0 left-0 h-full max-w-80 p-4 z-20 bg-base-light/70 backdrop-blur-sm text-text-dark">
  <button on:click={() => navOpen = !navOpen} class="w-min self-end p-2" >
    <p class="text-sm opacity-90">{navOpen ? "Close" : "Menu"}</p>
  </button>

  {#if  navOpen}
    <ul class="flex flex-col grow w-full mt-4 space-y-4 ">
      {#each forceGraph.root.children as node}
        <NavItem {node} {forceGraph} {openPlayer}/>  
      {/each}
    </ul>
  {/if}

  {#if breadcrumb}
    <p class="p-2 text-sm opacity-60">{breadcrumb}</p>
  {/if}
</nav>