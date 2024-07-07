<script>
  export let wFull = false
</script>

<div class="w-full bg-black/80 relative backdrop-blur-sm flex flex-col h-full p-4 pl-8 {
  wFull && 'lg:w-full'
}">
  <slot />
</div>