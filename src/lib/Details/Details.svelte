<script>
  import Playlist from "./Playlist/Playlist.svelte"
  import CollapseLeftButton from "$lib/CollapseLeftButton.svelte"
  import { selected } from "$lib/stores"

  export let closeDetails
  
  $: work = $selected.data
  $: client = work?.client?.data.attributes
</script>

<div class="flex flex-col h-full max-w-96 max-h-full overflow-hidden p-4 border-r border-black-olive/10">
  <CollapseLeftButton text="< close" onClick={closeDetails} />

  <h1 class="text-base text-black-olive/90 pl-4">{work.title}</h1>
  
  {#if client}
    <h2 class="text-sm text-black-olive/60 mb-4 pl-4">{client.name}</h2>
  {/if}
  
  <div class="overflow-scroll pl-4">
    {#if work.description}
      <p class="text-xs text-black-olive/60 leading-relaxed">{work.description}</p>
    {/if}
    <!-- show first ~3 lines and hide -->
    {#if work.credits}
      <h3 class="mt-4 text-sm text-black-olive/90">Credits</h3>
      <p class="text-xs text-black-olive/60 leading-relaxed">{work.credits}</p>
    {/if}
    <!-- relatedContent -->
    <Playlist />
  </div>
</div>