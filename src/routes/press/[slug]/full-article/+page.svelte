<script>
  import {
    ArticleEmbed,
    DetailsWrapper
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