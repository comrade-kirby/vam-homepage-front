<script>
  export let xs = false
  export let xl = false
  export let orange = false

  const orangeStyles = orange ? 'text-orange-800/60' : null
  const xsStyles = xs ? 'text-xs' : null
  const xlStyles = xl ? 'text-xl' : null
</script>

<div class="{xlStyles} {xsStyles} {orangeStyles} text-black-olive/30 hover:text-orange-800/90 tracking-wide">
  <slot />
</div>