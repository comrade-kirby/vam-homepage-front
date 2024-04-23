<script>
  import { minimizeNav } from '$lib/stores'

  export let title

  const href = '/' + title.toLowerCase()
  const affordanceStyles = "after:bg-bg-darkest after:absolute after:left-4 after:w-3/4 after:h-10 after:rounded-r-full after:backdrop-blur-sm after:border-2 after:border-l-0 after:border-orange-600 after:ml-2"
</script>

<button on:click={() => minimizeNav.set(false)} class="{affordanceStyles} relative w-fit py-1 left-0 flex justify-start items-center overflow-visible">
  <a {href} class="group pb-0.5 z-50 truncate ...  flex w-fit overflow-x-visible text-left text-base hover:text-orange-400 text-tprimary/90">
    {title}
  </a>
</button>