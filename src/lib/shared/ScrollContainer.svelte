<script>
  export let onTouch
</script>

<div on:touchstart={onTouch} class="overflow-y-scroll h-full max-h-full -mr-4 pr-4">
  <slot />
</div>
