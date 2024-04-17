<script>
  export let xs = false
  export let xl = false
  export let outline, center

  const xsStyles = xs && 'text-xs'
  const xlStyles = xl && 'text-xl'
  const centerStyles = center && 'w-full'
  const outlineStyles = outline && 'px-4 py-2 border border-tprimary/90 rounded-lg font-bold  hover:text-tsecondary/90 hover:border-tsecondary/90'

</script>

<div class="{xlStyles} {xsStyles} {outlineStyles} {centerStyles} w-fit text-tprimary/90 hover:text-orange-400/90 tracking-wide">
  <slot />
</div>