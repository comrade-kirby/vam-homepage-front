<script>
  export let show
</script>

<div on:click={show} class="flex flex-auto flex-col overflow-y-scroll snap-y
  py-8  px-4 lg:px-6 xl:px-12
  gap-y-2 lg:gap-y-4  
">
  <slot />
</div>
