<script>
  export let dependent = true
  export let hFull
</script>

{#if dependent}
  <div class="{hFull && 'h-full'} ml-4">
    <slot />
  </div>
{/if}