<script>
  import { selected } from "$lib/stores.js";
  import CollapseLeftButton from "$lib/CollapseLeftButton.svelte"
  import ClampParagraph from "$lib/shared/ClampParagraph.svelte"
  import Playlist from "$lib/Playlist/Playlist.svelte";
  import { buildRelatedWorksList } from "$lib/helpers.js"

  $: work = $selected.data
  $: client = work.client
  $: console.log(work)
  $: relatedWorks = buildRelatedWorksList($selected)
</script>

<div class="relative flex flex-col h-full max-w-96 max-h-full overflow-hidden p-4 border-r border-black-olive/10">
  <CollapseLeftButton text="< close" slug={$selected.data.slug} />

  <h1 class="text-base text-black-olive/90 pl-4">{work.attributes.title}</h1>
  
  {#if client}
    <h2 class="text-sm text-black-olive/60 mb-4 pl-4">{client.name}</h2>
  {/if}
  
  <div class="overflow-scroll pl-4">
    {#if work.attributes.description}
      <ClampParagraph content={work.attributes.description} />
    {/if}

    {#if work.attributes.credits}
      <h3 class="mt-4 mb-1 text-sm text-black-olive/90">Credits</h3>
      <ClampParagraph content={work.attributes.credits} short />
    {/if}
    <Playlist {relatedWorks} />
  </div>
</div>