<script>
  import { ButtonStyles } from '$lib'

  export let isClamped
  export let onClick

  const upArrowHtml = '&#8593;'
  const downArrowHtml = '&#8595;'
  
  $: buttonText = isClamped ? 'show more' : 'show less'
  $: htmlIcon = isClamped ? downArrowHtml : upArrowHtml
</script>

<button on:click={onClick} class="mt-2">
  <ButtonStyles xs center>
    <p>{buttonText}</p>
    <p>{@html htmlIcon}</p>
  </ButtonStyles>
</button>