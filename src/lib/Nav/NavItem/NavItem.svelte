<script>
  import NavLink from "./NavLink/NavLink.svelte"
  import NavSubMenu from "./NavSubMenu/NavSubMenu.svelte"

  export let node, forceGraph, detailsOpen, openDetails
  
  const isLeafNode = node.height === 0
  const isTopLevelNav = node.depth === 0
</script>

<li class="flex flex-col 
  { isTopLevelNav 
    ? 'pl-0' 
    : node.depth % 2
      ? 'pl-2'
      : 'pl-2'
  }
">
  {#if isLeafNode }
    <NavLink {node} {forceGraph} {detailsOpen} {openDetails} />
  {:else}
    <NavSubMenu {node} {forceGraph}>
      {#each node.children as node}
        <svelte:self {node} {forceGraph} {detailsOpen} {openDetails} />
      {/each}
    </NavSubMenu>
  {/if}
</li>