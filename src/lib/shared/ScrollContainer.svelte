<script>
  export let show
</script>

<div on:click={show} class="overflow-y-scroll snap-y mt-6 -mr-4 pr-4 flex-auto">
  <slot />
</div>
