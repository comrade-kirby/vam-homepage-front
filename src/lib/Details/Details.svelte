<script>
  import Playlist from "./Playlist/Playlist.svelte"
  import CollapseLeftButton from "$lib/CollapseLeftButton.svelte"
  import { selected } from "$lib/stores"

  export let closeDetails
</script>

<div class="flex flex-col h-full max-w-96 max-h-full overflow-hidden p-4 border-l-2 border-black-olive/10">
  <CollapseLeftButton text="< close" onClick={closeDetails} />

  <h1 class="text-base text-black-olive/90 pl-4">{$selected.data.title}</h1>
  <h2 class="text-sm text-black-olive/60 mb-4 pl-4">{$selected.data.client.data.attributes.name}</h2>
  <div class="overflow-scroll pl-4">
    {#if $selected.data.description}
      <p class="text-xs text-black-olive/60 leading-relaxed">{$selected.data.description}</p>
    {/if}
    <!-- show first ~3 lines and hide -->
    {#if $selected.data.credits}
      <h3 class="mt-4 text-sm text-black-olive/90">Credits</h3>
      <p class="text-xs text-black-olive/60 leading-relaxed">{$selected.data.credits}</p>
    {/if}
    <!-- relatedContent -->
    <Playlist />
  </div>
</div>