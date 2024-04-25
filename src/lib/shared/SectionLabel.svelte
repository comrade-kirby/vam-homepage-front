<script>
  export let collapsable, containsCurrent = true
</script>

<h3 class="group text-xl text-nowrap font-black flex mb-2 max-w-full tracking-widest {
  collapsable
    ? containsCurrent 
      ? 'text-ttertiary/70' 
      : 'text-tprimary/50 hover:text-ttertiary/60'
    : 'text-tprimary/80'
}">
  <slot />
</h3>