<script>
  export let text, subtext, href, clamp1, onHover, isSelected, onClick
  
  const textSize = subtext ? 'text-2xs' : 'text-xs' 
</script>

<a {href} on:click={onClick} on:pointerenter={onHover}
  class="flex flex-col {isSelected ? 'text-tsecondary/90' : 'text-tprimary/90 hover:text-tsecondary/80'} group">
  <span class="{clamp1 ? 'line-clamp-1' : 'line-clamp-2'} {textSize}">{text}</span>

  {#if subtext}
    <span class="text-3xs {isSelected ? 'text-tsecondary/90' : 'text-orange-500/90 group-hover:text-tsecondary'} tracking-wide">{subtext}</span>
  {/if}
</a>