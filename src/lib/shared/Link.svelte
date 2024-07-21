<script>
  export let text, subtext, href, clamp1, onHover, isSelected, onClick, large
</script>

<a {href} on:click={onClick} on:pointerenter={onHover} class="flex flex-col group {
    isSelected 
      ? 'text-primary/95' 
      : 'text-white/90 hover:text-primary/80'
  }">
  <span class="{
    clamp1 
      ? 'line-clamp-1' 
      : 'line-clamp-2'
  } {
    large 
      ? 'text-xs md:text-sm'
      : subtext ? 'text-3xs md:text-2xs' : 'text-2xs md:text-xs' 
  }">
    {text}
  </span>

  {#if subtext}
    <span class="text-3xs {isSelected ? 'text-primary/90' : 'text-orange-500/90 group-hover:text-primary'} tracking-wide">{subtext}</span>
  {/if}
</a>