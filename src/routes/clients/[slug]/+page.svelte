<script>
  import GraphHud from "$lib/GraphHUD/GraphHUD.svelte"

  export let data

  $: client = data.client
  $: heading = client.attributes.name
  $: slug = client.attributes.slug 
  $: detailsHref = client ? '/clients/' + slug + '/details' : false
</script>

{#if client}
  <GraphHud {heading} {detailsHref} />
{/if}