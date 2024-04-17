<script>
  export let width, itemsEnd, background = 'bg-bg-dark/80'
</script>

<div class="{width} {background} {itemsEnd && 'items-end'} relative z-20 h-screen backdrop-blur-sm flex flex-col h-full max-h-full overflow-visible p-4 pb-8 ">
  <slot />
</div>