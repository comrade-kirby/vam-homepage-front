<script>
  import { selected, awaitingSelection } from "$lib/stores.js";
  import { buildRelatedWorksList } from "$lib/helpers.js"

  import ClampParagraph from "$lib/shared/ClampParagraph.svelte"
  import Playlist from "$lib/Playlist/Playlist.svelte";
  import Details from "$lib/Details/Details.svelte";

  $: work = $selected.data
  $: client = work.client
  $: relatedWorks = buildRelatedWorksList($selected)
</script>

{#if !$awaitingSelection}
  <Details collapseUrl={work.slug} heading={work.name} subheading={client.name}>
    {#if work.attributes.description}
      <ClampParagraph content={work.attributes.description} />
    {/if}
    
    {#if work.attributes.credits}
      <h3 class="mt-4 mb-1 text-sm text-black-olive/90">Credits</h3>
      <ClampParagraph content={work.attributes.credits} short />
    {/if}
    
    {#if relatedWorks}
      <Playlist {relatedWorks} />
    {/if}
  </Details>
{/if}