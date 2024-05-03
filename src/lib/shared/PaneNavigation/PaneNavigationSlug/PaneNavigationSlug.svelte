<script>
  export let onClick, minimizedLabelText, minimizedIconText
</script>

<button on:click={onClick} class="flex flex-auto items-center justify-start space-x-2">
  <div class="uppercase bg-secondary/90 py-1 px-2 text-3xs font-bold text-dark/90 rounded-sm tracking-widest">
    {minimizedIconText}
  </div>
  <h1 class="text-xs md:text-sm text-primary/80 tracking-wider line-clamp-1">
    {minimizedLabelText}
  </h1>  
</button>