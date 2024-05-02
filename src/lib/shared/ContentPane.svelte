<script>
  export let pageNav
</script>

<div class="{pageNav && 'pl-16'} min-w-96 bg-black/80 relative backdrop-blur-sm flex flex-col h-full p-4 pl-8">
  <slot />
</div>