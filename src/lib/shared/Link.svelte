<script>
  export let text, subtext, href, clamp1, onHover, isSelected, onClick, large
</script>

<a {href} on:click={onClick} on:pointerenter={onHover} class="flex flex-col gap-y-0.5 leading-tight group {
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
      ? 'text-xs lg:text-sm'
      : 'text-2xs lg:text-xs' 
  }">
    {text}
  </span>

  {#if subtext}
    <span class="text-3xs {isSelected ? 'text-primary/90' : 'text-orange-500/90 group-hover:text-primary'} tracking-wide">{subtext}</span>
  {/if}
</a>