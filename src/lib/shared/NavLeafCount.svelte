<script>
  export let show, childCount
</script>

{#if show}
  <span class="text-tprimary/50 group-hover:text-tprimary/80 flex ml-1 text-xs">
    +{childCount}
  </span>
{/if}