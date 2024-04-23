<script>
  import { page } from '$app/stores'

  export let onClick

  $: pathname = $page.url.pathname
</script>

<button on:click={onClick} class="w-full z-30 flex justify-start">
  <h1 class="text-sm text-tprimary/80 tracking-wider line-clamp-1">
    {pathname}
  </h1>  
</button>