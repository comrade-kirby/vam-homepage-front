<script>
  export let pageNav
</script>

<div class="w-full lg:w-96 bg-black/80 relative backdrop-blur-sm flex flex-col h-full p-4 pl-16 lg:pl-16 {!pageNav && 'lg:pl-8'}">
  <slot />
</div>