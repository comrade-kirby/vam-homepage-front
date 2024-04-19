<script>
  export let dependent = true
</script>

{#if dependent}
  <div class="ml-6">
    <slot />
  </div>
{/if}