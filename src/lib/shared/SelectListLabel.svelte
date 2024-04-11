<script>
  import NavLeafCount from './NavLeafCount.svelte'
  export let containsCurrent, expanded, childCount
</script>

<h3 class="text-xs flex {containsCurrent ? 'text-orange-900/90' : 'text-orange-900/70 hover:text-orange-900/90'}">
  <span><slot /></span>
  
  {#if !expanded}
    <NavLeafCount {childCount} />
  {/if}
</h3>