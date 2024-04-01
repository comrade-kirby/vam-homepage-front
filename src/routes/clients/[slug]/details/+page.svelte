<script>
  import { selected } from "$lib/stores.js";
  import CollapseLeftButton from "$lib/CollapseLeftButton.svelte"
  import Playlist from "$lib/Playlist/Playlist.svelte";

  $: client = $selected.data[0]
  $: clientWorks = $selected.children
</script>

<div class="relative flex flex-col h-full max-w-96 max-h-full overflow-hidden p-4 border-r border-black-olive/10">
  <CollapseLeftButton text="< close" slug={client.slug} />

  <h1 class="text-base text-black-olive/90 pl-4">{client.name}</h1>
  
  {#if clientWorks}
    <Playlist relatedWorks={clientWorks} />
  {/if}
</div>