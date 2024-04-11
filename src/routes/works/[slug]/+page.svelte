<script>
  import GraphHud from '$lib/GraphHUD/GraphHUD.svelte'

  export let data

  $: work = data.work
  $: title = work?.data.attributes.title
  $: subtitle = work?.data.attributes.client.data.attributes.name
  $: slug = work?.data.attributes.slug 
  $: closeUrl = '/works'
  $: detailsUrl = work ? '/works/' + slug + '/details' : false
</script>

{#if work}
  <GraphHud {title} {subtitle} {detailsUrl} {closeUrl} />
{/if}