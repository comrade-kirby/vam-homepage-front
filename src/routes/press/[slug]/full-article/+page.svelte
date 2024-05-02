<script>
  import {
    ArticleEmbed,
    DetailsWrapper,
    GraphControls
  } from '$lib'
  
  export let data

  let minimized = false
  
  $: press = data.press.attributes
  $: title = press.title
  $: slug = '/' + press.slug
  $: closeUrl = '/press' + slug
</script>

<DetailsWrapper bind:minimized {closeUrl} {title} width='w-full md:w-160' minimizedLabelText={slug} minimizedIconText='article'>
  <ArticleEmbed {press} />
</DetailsWrapper>

<GraphControls position={
  minimized 
    ? 'col-start-5 row-end-2 col-span-1 lg:row-start-3'
    : 'col-start-5 row-start-1 lg:col-start-4 lg:row-start-3'
} />