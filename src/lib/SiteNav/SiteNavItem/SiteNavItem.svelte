<script>
  import { minimizeNav } from '$lib/stores'

  import SiteNavItemBorder from './SiteNavItemBorder/SiteNavItemBorder.svelte'

  export let title, selected

  const href = '/' + title
</script>


<SiteNavItemBorder {selected} >
  <button on:click={() => minimizeNav.set(false)} class="{
    selected
      ? 'pl-2 text-ttertiary/90'
      : 'hover:text-ttertiary/70 text-tprimary/70'
  } relative right-4 ">
    <a {href} class="group pb-0.5 z-50 h-10 truncate ... capitalize flex items-center w-fit text-left text-base">
      {title}
    </a>
  </button>
</SiteNavItemBorder>