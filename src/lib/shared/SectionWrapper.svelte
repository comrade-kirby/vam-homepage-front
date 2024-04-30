<script>
  export let dependent = true
  export let hFull
</script>

{#if dependent}
  <div class="snap-start {hFull && 'h-full'}">
    <slot />
  </div>
{/if}