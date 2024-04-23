<script>
  export let width, minimized
</script>

<div class="md:pl-4 bg-bg-darkest/60 max-h-full relative z-20 backdrop-blur-sm flex flex-col {
  minimized 
    ? 'h-fit p-2 md:items-end md:h-full' 
    : 'h-full p-4 pb-8'
} {width}">
  <slot />
</div>