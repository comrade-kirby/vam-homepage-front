<script>
  export let dependent = true
</script>

{#if dependent}
  <div class="pl-3">
    <slot />
  </div>
{/if}