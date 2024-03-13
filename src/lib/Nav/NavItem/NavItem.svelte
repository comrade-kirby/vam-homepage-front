<script>
  import { navOpen } from "$lib/stores"
  
  import NavLink from "./NavLink/NavLink.svelte"
  import NavSubMenu from "./NavSubMenu/NavSubMenu.svelte"

  export let node, forceGraph, openDetails
  
  const isLeafNode = node.height === 0
  
</script>

<li class="flex flex-col pl-2">
  {#if isLeafNode }
    <NavLink {node} {openDetails} {forceGraph} />
  {:else}
    <NavSubMenu {node} {forceGraph}>
      {#if  $navOpen}
        {#each node.children as node}
          <svelte:self {node} {forceGraph} {openDetails} />
        {/each}
      {/if}
    </NavSubMenu>
  {/if}
</li>