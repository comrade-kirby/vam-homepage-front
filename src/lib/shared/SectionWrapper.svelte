<script>
  export let dependent = true
  export let hFull
  export let end = false
</script>

{#if dependent}
  <div class="{end ? 'snap-end' : 'snap-start'} {hFull && 'h-full'}">
    <slot />
  </div>
{/if}