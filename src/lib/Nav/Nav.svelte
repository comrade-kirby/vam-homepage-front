<script>
  import { selected } from '$lib/stores'

  import NavItem from './NavItem/NavItem.svelte'
  import Details from '$lib/Details/Details.svelte'
  import SimpleNavItem from './SimpleNavItem/SimpleNavItem.svelte';

  export let forceGraph, root

  let detailsOpen = false

  const closeDetails = () => detailsOpen = false
  const openDetails = () => detailsOpen = true
</script>

<!-- consider :focus-within tailwind pseudoclass for focus-->
<div class="flex absolute top-0 left-0 h-full z-20 bg-blue-100/70 backdrop-blur-sm">
  <nav class="flex flex-col h-full max-w-60 p-4 pl-8 text-black-olive border-r border-black-olive/10 
    { detailsOpen ? '': 'hover:max-w-96' }">

      <ul class="flex flex-col grow w-full space-y-2 ">
        <NavItem node={root} {forceGraph} {detailsOpen} {openDetails} />
        <SimpleNavItem text="Clients" />
        <SimpleNavItem text="About" />  
      </ul>
  </nav>
  {#if detailsOpen && $selected}
    <Details  {closeDetails} />
  {/if}
</div>