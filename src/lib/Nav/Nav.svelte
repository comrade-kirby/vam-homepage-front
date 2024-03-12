<script>
  import NavItem from './NavItem/NavItem.svelte'
  import Details from '$lib/Details/Details.svelte'

  import CollapseLeftButton from '$lib/CollapseLeftButton.svelte'
  import { navOpen, focused } from '$lib/stores'

  export let forceGraph, root
  let detailsOpen = false

  const closeDetails = () => detailsOpen = false
  const openDetails = () => detailsOpen = true
</script>

<div class="flex absolute top-0 left-0 h-full z-20 bg-blue-100/70 backdrop-blur-sm">
  <nav class="flex flex-col h-full {detailsOpen ? 'max-w-60 pl-2': 'max-w-96 pl-8'} p-4 text-black-olive hover:max-w-96">
    <CollapseLeftButton text={$navOpen ? '< close' : 'Nav >'} onClick={() => navOpen.update((open) => !open)} />

    {#if  $navOpen}
      <ul class="flex flex-col grow w-full space-y-4 ">
        {#each root.children as node}
          <NavItem {node} {forceGraph} {openDetails} />  
        {/each}
      </ul>
    {/if}
    
  </nav>
  {#if detailsOpen && $focused}
    <Details  {closeDetails} />
  {/if}
</div>