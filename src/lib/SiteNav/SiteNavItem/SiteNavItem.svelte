<script>
  import { retreatLeft } from '$lib/stores'

  export let title

  const href = '/' + title.toLowerCase()
  const affordanceStyles = "after:bg-bg-darkest after:absolute after:left-3 after:w-full after:h-10 after:rounded-r-full after:backdrop-blur-sm after:border-2 after:border-l-0 after:border-orange-600 after:ml-0.5"
</script>

<div class="{affordanceStyles} relative w-fit py-1 left-8 flex justify-start items-center overflow-visible">
  <a {href} class="group pb-0.5 z-50 truncate ...  flex w-fit overflow-x-visible text-left text-base hover:text-orange-400 text-tprimary/90">
    {title}
  </a>
</div>