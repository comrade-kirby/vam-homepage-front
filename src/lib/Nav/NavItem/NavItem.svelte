<script>
  import NavLink from "./NavLink/NavLink.svelte"
  import NavSubMenu from "./NavSubMenu/NavSubMenu.svelte"

  export let node
  export let forceGraph   
  export let openPlayer
  
  const isLeafNode = node.height === 0
</script>

<li class="flex flex-col pl-1">
  {#if isLeafNode }
    <NavLink {node} {openPlayer} {forceGraph} />
  {:else}
    <NavSubMenu {node} {forceGraph}>
      {#each node.children as node}
        <svelte:self {node} {forceGraph} {openPlayer} />
      {/each}
    </NavSubMenu>
  {/if}
</li>