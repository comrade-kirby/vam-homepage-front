<script>
  export let text, subtext, href, clamp1, onHover, isSelected, onClick

  const textSize = subtext ? 'text-2xs' : 'text-xs' 
</script>

<a {href} on:click={onClick} on:pointerenter={onHover}
  class="flex flex-col {isSelected ? 'text-primary/90' : 'text-white/90 hover:text-primary/80'} group">
  <span class="{clamp1 ? 'line-clamp-1' : 'line-clamp-2'} {textSize}">{text}</span>

  {#if subtext}
    <span class="text-3xs {isSelected ? 'text-primary/90' : 'text-orange-500/90 group-hover:text-primary'} tracking-wide">{subtext}</span>
  {/if}
</a>