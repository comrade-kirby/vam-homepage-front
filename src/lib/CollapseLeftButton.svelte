<script>
  export let text
  export let work

  $: href = '/' + work.slug
</script>

<a {href} class="self-end mb-4 text-xs text-black-olive/30 hover:text-orange-800/90">
  {text}
</a>
