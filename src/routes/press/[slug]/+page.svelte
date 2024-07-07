<script>
  import { GraphControls, GraphHud } from '$lib'

  export let data

  $: press = data.press
  $: title = press.attributes.title
  $: textBlock = press.attributes.snippet
  $: slug = press.attributes.slug
  $: closeUrl = '/press'
  $: detailsUrl = '/press/' + slug + '/full-article'
</script>

{#if press}
  <GraphHud {title} {textBlock} {detailsUrl} {closeUrl} detailsLinkText="full article" />
{/if}

<GraphControls position="col-start-3 row-start-2 col-span-2"/>