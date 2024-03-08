<script>
  export let text
  export let onClick
</script>

<button type="button" class="self-end mb-4 text-xs text-black-olive/30 hover:text-orange-800/90"
  on:click={onClick}
>
  {"< " + text}
</button>
