<script>
  export let onClick, display = false

  const gradientStyles = 'bg-gradient-to-br to-black from-secondary/80 via-primary/70'
</script>

{#if display}
  <button on:click={onClick} class="absolute -left-6 top-2 size-16 rounded-full backdrop-blur-sm {gradientStyles}" />
{/if}