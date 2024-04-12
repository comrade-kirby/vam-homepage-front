<script>
  import SectionLabel from './SectionLabel.svelte'
  import NavLeafCount from './NavLeafCount.svelte'
  export let containsCurrent, expanded, childCount
</script>

<SectionLabel {containsCurrent}>
  <slot />
  
  {#if !expanded}
    <NavLeafCount {childCount} />
  {/if}
</SectionLabel>