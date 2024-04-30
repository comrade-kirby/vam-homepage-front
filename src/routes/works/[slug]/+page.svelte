<script>
  import GraphHud from '$lib/GraphHUD/GraphHUD.svelte'
  import GraphControls from '$lib/shared/GraphControls/GraphControls.svelte'

  export let data

  $: work = data.work
  $: title = work?.data.attributes.title
  $: subtitle = work?.data.attributes.client.data.attributes.name
  $: slug = work?.data.attributes.slug 
  $: closeUrl = '/works'
  $: detailsUrl = work ? '/works/' + slug + '/details' : false
</script>

<div class="flex flex-1 md:h-full flex-col items-end justify-end">

  {#if work}
    <GraphHud {title} {subtitle} {detailsUrl} {closeUrl} />
  {/if}
  
  <GraphControls />
</div>