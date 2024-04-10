<script>
  import GraphHud from '$lib/GraphHUD/GraphHUD.svelte'

  export let data

  $: work = data.work
  $: heading = work?.data.attributes.title
  $: subheading = work?.data.attributes.client.data.attributes.name
  $: slug = work?.data.attributes.slug 
  $: detailsHref = work ? '/works/' + slug + '/details' : false
</script>

{#if work}
  <GraphHud {heading} {subheading} {detailsHref} />
{/if}