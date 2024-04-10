<script>
  export let text, subtext, href, clamp1, onHover
  
  const textSize = subtext ? 'text-2xs' : 'text-xs' 
</script>

<a {href} on:pointerenter={onHover}
  class="flex flex-col my-2 text-black-olive/80 hover:text-orange-900/80 group">
  <span class="{clamp1 ? 'line-clamp-1' : 'line-clamp-2'} {textSize}">{text}</span>

  {#if subtext}
    <span class="text-3xs text-orange-800/80 group-hover:text-orange-800/95 tracking-wide">{subtext}</span>
  {/if}
</a>