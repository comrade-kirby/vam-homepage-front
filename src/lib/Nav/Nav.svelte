<script>
  import NavItem from './NavItem/NavItem.svelte'
  import CollapseLeftButton from '$lib/CollapseLeftButton.svelte'

  export let openPlayer, forceGraph, root

  let navOpen = true
</script>

<nav class="flex flex-col h-full max-w-96 p-4 pl-8 text-black-olive">
  <CollapseLeftButton text="close" />

  {#if  navOpen}
    <ul class="flex flex-col grow w-full space-y-4 ">
      {#each root.children as node}
        <NavItem {node} {forceGraph} {openPlayer} />  
      {/each}
    </ul>
  {/if}

  <!-- return breadcrumb here on item hover -->
  <!-- or on main page -->
</nav>