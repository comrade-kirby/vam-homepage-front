<script>

  import ArticleEmbed from '$lib/shared/ArticleEmbed.svelte'
  import DetailsWrapper from '$lib/shared/DetailsWrapper.svelte'
  export let data

  $: press = data.press.attributes
  $: title = press.title
  $: closeUrl = '/press/' + press.slug
</script>

<DetailsWrapper {closeUrl} {title} width='w-full md:w-160'>
  <ArticleEmbed {press} />
</DetailsWrapper>