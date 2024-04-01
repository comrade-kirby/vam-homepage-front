<script>
  export let depth
  export let active

  let textSize, baseColor, activeColor, hoverColor

  switch(depth) {
    case 1:
      textSize = 'text-base'
      baseColor = 'text-orange-900/80 hover:text-orange-900/90'
      activeColor = 'text-orange-900/90'
      break
    case 2:
      textSize = 'text-sm'
      baseColor = 'text-black-olive/70 hover:text-black-olive/80'
      activeColor = 'text-orange-900/80'
      break
    case 3:
      textSize = 'text-xs'
      baseColor = 'text-black-olive/60 hover:text-black-olive/70'
      activeColor = 'text-orange-900/70'
      break
  }


</script>

<span class="truncate ... {textSize} {active ? activeColor : baseColor}">
  <slot />
</span>