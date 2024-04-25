<script>
  export let width, minimized
</script>

<div class=" md:pl-10 bg-bg-darkest/60 flex-1 relative z-20 backdrop-blur-sm flex flex-col {
  minimized 
    ? 'h-fit p-2 w-full ' 
    : `h-full p-4 pb-8 w-full ${width}`
} ">
  <slot />
</div>