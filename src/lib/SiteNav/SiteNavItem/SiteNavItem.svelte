<script>
  import { minimizeNav } from '$lib/stores'

  import SiteNavItemBorder from './SiteNavItemBorder/SiteNavItemBorder.svelte'

  export let title, selected

  const href = '/' + title
</script>


<SiteNavItemBorder {selected} >
  <button on:click={() => minimizeNav.set(false)} class="{
    selected
      ? 'text-ttertiary/90 pr-2 md:pr-0 md:pl-2'
      : 'text-tprimary/70 hover:text-ttertiary/80'
  } relative left-4 md:left-[unset] md:right-4 ">
    <a {href} class="group pb-0.5 z-50 h-10 truncate ... capitalize flex items-center w-fit  text-base">
      {title}
    </a>
  </button>
</SiteNavItemBorder>