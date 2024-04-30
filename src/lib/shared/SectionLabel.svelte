<script>
  export let collapsable, containsCurrent = true
</script>

<h3 class="group text-xl text-nowrap font-black flex mb-2 max-w-full tracking-widest {
  collapsable
    ? containsCurrent 
      ? 'text-secondary/70' 
      : 'text-white/50 hover:text-secondary/60'
    : 'text-white/80'
}">
  <slot />
</h3>