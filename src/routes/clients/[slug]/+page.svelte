<script>
  import GraphHud from "$lib/GraphHUD/GraphHUD.svelte"

  export let data

  $: client = data.client
  $: title = client.attributes.name
  $: slug = client.attributes.slug 
  $: closeUrl = '/clients'
  $: detailsUrl = client ? '/clients/' + slug + '/details' : false
</script>

{#if client}
  <GraphHud {title} {detailsUrl} {closeUrl} />
{/if}