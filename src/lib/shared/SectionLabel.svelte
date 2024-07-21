<script>
  export let collapsable, containsCurrent = true
</script>

<h3 class="group max-w-full flex
  font-black text-nowrap tracking-widest 
  text-lg lg:text-xl {
  collapsable && containsCurrent && 'text-secondary/70' 
} {
  collapsable && !containsCurrent && 'text-white/50 hover:text-secondary/60' 
} {
  !collapsable && 'text-white/80'
}">
  <slot />
</h3>