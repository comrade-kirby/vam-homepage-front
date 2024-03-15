<script>
  import { navOpen } from "$lib/stores"
  
  import NavLink from "./NavLink/NavLink.svelte"
  import NavSubMenu from "./NavSubMenu/NavSubMenu.svelte"

  export let node, forceGraph, openDetails
  
  const isLeafNode = node.height === 0
  const isTopLevelNav = node.depth === 0
</script>

<li class="flex flex-col 
  { isTopLevelNav 
    ? 'pl-0' 
    : node.depth % 2
      ? 'pl-1'
      : 'pl-2'
  }
">
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