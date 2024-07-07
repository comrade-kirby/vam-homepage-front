<script>
  import { minimizeNav } from '$lib/stores'

  import SiteNavItemBorder from './SiteNavItemBorder/SiteNavItemBorder.svelte'

  export let title, selected
  export let onClick = false

  const href = '/' + title
</script>


<SiteNavItemBorder {selected} >
  <button on:click={() => minimizeNav.set(false)} class="relative {
    selected
      ? 'text-secondary/90 pl-2'
      : 'text-white/70 hover:text-secondary/80'
  }">
    {#if onClick}
      <button on:click={onClick} class="group pb-0.5 z-40 h-10 truncate ... capitalize flex items-center w-fit text-xs md:text-base">
        {title}
      </button>
    {:else}
      <a {href} class="group pb-0.5 z-40 h-10 truncate ... capitalize flex items-center w-fit text-xs md:text-base">
        {title}
      </a>
    {/if}
  </button>
</SiteNavItemBorder>