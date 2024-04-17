<script>
  export let width, itemsEnd, background = 'bg-bg-dark/80'
</script>

<div class="{width} {background} {itemsEnd && 'items-end'} h-full max-h-full relative z-20 backdrop-blur-sm flex flex-col p-4 pb-8">
  <slot />
</div>