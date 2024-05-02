<script>
  import { ButtonStyles, Icon } from '$lib'
  
  export let show

  const Html = '&#x25A1;'
</script>

<button on:click={show}>
  <ButtonStyles layout xl>
    <Icon name="expand" />
  </ButtonStyles>
</button>