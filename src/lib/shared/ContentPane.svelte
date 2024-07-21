<script>
  export let wFull = false
</script>

<div class="w-full bg-darker/90 relative backdrop-blur flex flex-col h-full {
  wFull && 'lg:w-full'
}">
  <slot />
</div>