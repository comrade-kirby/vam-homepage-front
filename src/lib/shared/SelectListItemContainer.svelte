<script>
  export let expanded
</script>

{#if expanded}
  <ul role="list" class="flex flex-col pl-4 ml-0.5 mb-2
    border-l border-orange-500/20
    gap-1 lg:gap-1.5  
  ">
    <slot />
  </ul>
{/if}