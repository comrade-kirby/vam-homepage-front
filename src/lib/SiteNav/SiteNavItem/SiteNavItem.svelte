<script>
  import { retreatLeft } from '$lib/stores'

  export let title

  const href = '/' + title.toLowerCase()
</script>

<div class="relative w-fit mr-2 py-1 flex justify-start items-center overflow-visible {
  $retreatLeft && 'left-14 after:absolute after:left-4 after:w-full after:h-10 after:rounded-r-full after:bg-bg-darkest/70 after:backdrop-blur-sm after:border-2 after:border-l-0 after:border-bg-dark after:ml-0.25'}">
  <a {href} class="group z-50 truncate ... pb-0.5 flex w-fit overflow-x-visible text-left text-base hover:text-orange-400 { 
    $retreatLeft 
      ? 'text-tprimary/70' 
      : 'text-tprimary/90'
  }">
    {title}
  </a>
</div>