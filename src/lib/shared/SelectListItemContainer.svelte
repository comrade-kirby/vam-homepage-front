<script>
  export let expanded
</script>

{#if expanded}
  <ul role="list" class="border-l border-orange-500/20 pl-1 ml-0.5 mb-4 md:mb-6">
    <slot />
  </ul>
{/if}