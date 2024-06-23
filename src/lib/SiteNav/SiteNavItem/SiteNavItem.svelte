<script>
  import { minimizeNav } from '$lib/stores'

  import SiteNavItemBorder from './SiteNavItemBorder/SiteNavItemBorder.svelte'

  export let title, selected

  const href = '/' + title
</script>


<SiteNavItemBorder {selected} >
  <button on:click={() => minimizeNav.set(false)} class="relative right-3 {
    selected
      ? 'text-secondary/90 pl-2'
      : 'text-white/70 hover:text-secondary/80'
  }">
    <a {href} class="group pb-0.5 z-40 h-10 truncate ... capitalize flex items-center w-fit text-xs md:text-base">
      {title}
    </a>
  </button>
</SiteNavItemBorder>