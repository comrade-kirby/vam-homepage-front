<script>
  import NavLink from '$lib/SubNav/NavLink/NavLink.svelte';
  import SectionLabel from './SectionLabel.svelte'
  import NavLeafCount from './NavLeafCount.svelte'
  
  export let containsCurrent, expanded, childCount, node
  export let labelText = false
  export let small = false
  export let onClick = null
</script>

{#if small}
  <div class="group flex items-center gap-x-2">
    <NavLink {node} {onClick} {childCount} large />
    {#if childCount > 1}
      <NavLeafCount show={!expanded} {childCount} />
    {:else}
      {#if !expanded}
        <span class="text-white/50 group-hover:text-white/80 text-xs truncate ...">/ {node.children[0].data.name}</span>
        {/if}
    {/if}
  </div>
{:else}
  <SectionLabel {containsCurrent} collapsable>
    {labelText || node.data[0].name.toUpperCase()}
    <NavLeafCount show={!expanded} {childCount} />
  </SectionLabel>
{/if}