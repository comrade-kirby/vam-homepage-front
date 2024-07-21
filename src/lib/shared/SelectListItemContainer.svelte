<script>
  export let expanded
</script>

{#if expanded}
  <ul role="list" class="flex flex-col gap-1 border-l border-orange-500/20 pl-4 ml-0.5">
    <slot />
  </ul>
{/if}