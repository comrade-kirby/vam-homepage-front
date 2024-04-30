<script>
  import { ButtonStyles } from '$lib'
  
  export let href

  const xHtml = '&#10005;'
</script>

<a {href}  class="h-full">
  <ButtonStyles xl>
    <span>{@html xHtml}</span>
  </ButtonStyles>
</a>