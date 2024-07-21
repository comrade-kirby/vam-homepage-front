<script>
  import { minimizeDetails } from '$lib/stores.js'

  import {
    ArticleEmbed,
    DetailsWrapper,
    GraphControls
  } from '$lib'
  
  export let data

  
  $: press = data.press.attributes
  $: title = press.title
  $: slug = '/' + press.slug
  $: closeUrl = '/press' + slug
</script>

<DetailsWrapper {closeUrl} {title} width='w-full md:w-160' minimizedLabelText={slug} minimizedIconText='article'>
  <ArticleEmbed {press} />
</DetailsWrapper>

<GraphControls position={
  $minimizeDetails 
    ? 'col-start-4 row-end-2 col-span-1 lg:row-start-3'
    : 'col-start-4 row-start-1 lg:col-start-3 lg:row-start-3'
} />