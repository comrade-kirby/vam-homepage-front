<script>
  export let dependent = true
  export let hFull
  console.log(hFull)
</script>

{#if dependent}
  <div class="{hFull && 'h-full'} ml-4">
    <slot />
  </div>
{/if}