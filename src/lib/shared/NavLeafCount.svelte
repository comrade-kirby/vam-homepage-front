<script>
  export let show, childCount

  const desktopStyles = 'md:flex'
</script>

{#if show}
  <span class="hidden {desktopStyles} text-tprimary/50 group-hover:text-tprimary/80 flex ml-1 text-xs">
    +{childCount}
  </span>
{/if}