<script>
  export let width, itemsEnd
</script>

<div class="{width} {itemsEnd && 'items-end'} bg-bg-darkest/60 h-full max-h-full relative z-20 backdrop-blur-sm flex flex-col p-4 pb-8">
  <slot />
</div>