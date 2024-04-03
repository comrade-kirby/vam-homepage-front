<script>
  export let isClamped
  export let onClick

  const upArrowHtml = '&#8593;'
  const downArrowHtml = '&#8595;'
  
  $: buttonText = isClamped ? 'show more' : 'show less'
  $: htmlIcon = isClamped ? downArrowHtml : upArrowHtml
</script>

<button on:click={onClick} class="text-xs mt-2 text-black-olive/30 hover:text-orange-800/90 tracking-wide">
  <p>{buttonText}</p>
  <p>{@html htmlIcon}</p>
</button>