<script>
  import ButtonStyles from "./ButtonStyles.svelte";
  
  export let href

  const xHtml = '&#10005;'
</script>

<a {href} class="flex items-end text-xl ml-6 max-h-6 text-orange-800/60 self-start hover:text-orange-800/90 tracking-wide">
  <ButtonStyles xl>
    <span>{@html xHtml}</span>
  </ButtonStyles>
</a>