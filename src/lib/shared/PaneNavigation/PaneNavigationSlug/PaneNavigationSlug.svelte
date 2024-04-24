<script>
  export let onClick, minimizedLabelText, minimizedIconText
</script>

<button on:click={onClick} class="w-full z-30 flex items-center justify-start space-x-2">
  <div class="uppercase bg-ttertiary/90 py-1 px-2 text-3xs font-bold text-bg-dark/90 rounded-sm tracking-widest">
    {minimizedIconText}
  </div>
  <h1 class="text-sm text-tsecondary/80 tracking-wider line-clamp-1">
    {minimizedLabelText}
  </h1>  
</button>