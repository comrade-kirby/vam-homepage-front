<script>
  export let short
  export let content

  let isClamped = true
  let needsClamp = false
  let h
  
  const reset = (content) => {
    isClamped = true
  }

  $: reset(content)
  $: needsClamp = short ? h > 70 : h > 120
</script>

<div bind:clientHeight={h} class="flex flex-col text-xs text-black-olive/60 leading-relaxed">
  <p class={needsClamp && isClamped 
    ? short
      ? 'line-clamp-3'
      : 'line-clamp-6' 
    : 'line-clamp-none'
  }>
    {content}
  </p>

  {#if needsClamp}
    <button class="text-xs mt-2 text-black-olive/30 hover:text-orange-800/90"
      on:click={() => isClamped = !isClamped}
    >
      {isClamped ? 'more' : 'less'}
    </button>
  {/if}
</div>
