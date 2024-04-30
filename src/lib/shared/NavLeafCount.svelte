<script>
  export let show, childCount
</script>

{#if show}
  <span class="text-white/50 group-hover:text-white/80 flex ml-1 text-xs">
    +{childCount}
  </span>
{/if}