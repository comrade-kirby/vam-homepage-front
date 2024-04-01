<script>
  import { selected } from "$lib/stores.js";

  import Details from "$lib/Details/Details.svelte"
  import Playlist from "$lib/Playlist/Playlist.svelte";

  $: client = $selected.data[0]
  $: clientWorks = $selected.children
</script>

<Details collapseUrl={client.slug} heading={client.name}>
  
  {#if clientWorks}
    <Playlist relatedWorks={clientWorks} />
  {/if}
</Details>