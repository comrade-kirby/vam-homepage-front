<script>
  import SectionLabel from './SectionLabel.svelte'
  import NavLeafCount from './NavLeafCount.svelte'
  
  export let containsCurrent, expanded, childCount
</script>

<SectionLabel {containsCurrent} collapsable>
  <slot />
  <NavLeafCount show={!expanded} {childCount} />
</SectionLabel>