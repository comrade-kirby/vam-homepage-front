<script>
  import { GraphControls, GraphHud } from '$lib'

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

<GraphControls position="col-start-4 row-start-2 col-span-2"/>