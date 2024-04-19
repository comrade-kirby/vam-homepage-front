<script>
  export let show, childCount

  const desktopStyles = 'md:flex'
</script>

<span class="hidden {desktopStyles} {show? 'text-tprimary/50 group-hover:text-tprimary/80' : 'text-transparent'} flex ml-1 text-xs">
  +{childCount}
</span>