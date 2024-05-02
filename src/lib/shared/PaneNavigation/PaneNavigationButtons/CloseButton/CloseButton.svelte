<script>
  import { ButtonStyles, Icon } from '$lib'
  
  export let href
</script>

<a {href} >
  <ButtonStyles layout xl>
    <Icon name="close" />
  </ButtonStyles>
</a>