<script>
  export let dependent = true
  export let hFull
</script>

{#if dependent}
  <div class="{hFull && 'h-full'}">
    <slot />
  </div>
{/if}