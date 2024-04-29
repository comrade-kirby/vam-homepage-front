<script>
  export let styles, minimized
</script>

<div class="bg-black/80 flex-1 relative z-20 backdrop-blur-sm flex flex-col {
  minimized 
    ? 'h-fit p-4 w-full ' 
    : `h-full p-4 pl-8 w-full ${styles}`
} ">
  <slot />
</div>