<script>
  import { page } from "$app/stores";
  // import Details from "$lib/Details/Details.svelte";
  import CollapseLeftButton from "$lib/CollapseLeftButton.svelte"
  import ClampParagraph from "$lib/shared/ClampParagraph.svelte"
  import Playlist from "$lib/Playlist/Playlist.svelte";

  export let data

  $: work = data.works.find(d => $page.url.pathname.includes(d.slug))
  $: client = work?.client?.data.attributes
</script>

<div class="relative flex flex-col h-full max-w-96 max-h-full overflow-hidden p-4 border-r border-black-olive/10">
  <CollapseLeftButton text="< close" {work} />

  <h1 class="text-base text-black-olive/90 pl-4">{work.title}</h1>
  
  {#if client}
    <h2 class="text-sm text-black-olive/60 mb-4 pl-4">{client.name}</h2>
  {/if}
  
  <div class="overflow-scroll pl-4">
    {#if work.description}
      <ClampParagraph content={work.description} />
    {/if}

    {#if work.credits}
      <h3 class="mt-4 mb-1 text-sm text-black-olive/90">Credits</h3>
      <ClampParagraph content={work.credits} short />
    {/if}
    <Playlist />
  </div>
</div>