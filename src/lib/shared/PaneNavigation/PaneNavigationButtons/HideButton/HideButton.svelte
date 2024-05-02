<script>
  import { ButtonStyles, Icon } from '$lib'
  
  export let minimize

  const Html = '&#95;'
</script>

<button on:click={minimize} class="">
  <ButtonStyles layout xl>
    <Icon name="minimize" />
  </ButtonStyles>
</button>