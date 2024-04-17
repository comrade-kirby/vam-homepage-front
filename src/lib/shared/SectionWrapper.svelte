<script>
  export let dependent = true
</script>

{#if dependent}
  <div class="pl-4">
    <slot />
  </div>
{/if}