<script>
  export let show
</script>

<div on:click={show} class="overflow-y-scroll h-full max-h-full -mr-4 pr-4">
  <slot />
</div>
