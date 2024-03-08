<script>
  import NavLink from "./NavLink/NavLink.svelte"
  import NavSubMenu from "./NavSubMenu/NavSubMenu.svelte"

  export let node, forceGraph, openPlayer, breadcrumb
  
  const isLeafNode = node.height === 0
</script>

<li class="flex flex-col pl-2">
  {#if isLeafNode }
    <NavLink {node} {openPlayer} {forceGraph} {breadcrumb}/>
  {:else}
    <NavSubMenu {node} {forceGraph}>
      {#each node.children as node}
        <svelte:self {node} {forceGraph} {openPlayer} {breadcrumb}/>
      {/each}
    </NavSubMenu>
  {/if}
</li>