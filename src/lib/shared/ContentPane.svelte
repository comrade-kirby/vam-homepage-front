<script>
  export let styles, minimized
</script>

<div class="bg-bg-darkest/60 flex-1 relative z-20 backdrop-blur-sm flex flex-col {
  minimized 
    ? 'h-fit p-2 w-full ' 
    : `h-full p-4 pb-8 w-full ${styles}`
} ">
  <slot />
</div>