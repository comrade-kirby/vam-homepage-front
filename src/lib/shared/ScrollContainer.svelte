<script>
  export let show
</script>

<div on:click={show} class="flex flex-col gap-y-8 overflow-y-scroll snap-y -mr-4 px-12 py-8
 flex-auto">
  <slot />
</div>
