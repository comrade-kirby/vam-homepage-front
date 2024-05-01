<script>
  import { ButtonStyles } from '$lib'
  
  export let show

  const Html = '&#x25A1;'
</script>

<button on:click={show} class="h-full">
  <ButtonStyles layout xl>
    <span>{@html Html}</span>
  </ButtonStyles>
</button>