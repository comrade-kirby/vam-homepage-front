<script>
  import { page } from '$app/stores'

  import DetailsWrapper from '$lib/shared/DetailsWrapper.svelte'
  import BlockQuote from '$lib/shared/BlockQuote.svelte'
  import ButtonStyles from "$lib/shared/ButtonStyles.svelte"

  export let data
  
  $: press = data.press.attributes
  $: title = press.title
  $: subtitle= press.publication
  $: snippet = press.snippet
  $: showFullArticle = $page.url.pathname.includes('full-article')
</script>

<DetailsWrapper closeUrl="/press" {title} {subtitle} collapse={!showFullArticle} width={showFullArticle ? 'w-96' : 'w-128'}>
  <BlockQuote content={snippet} />

  {#if !showFullArticle}
    <div class="flex justify-center">
      <a href={'/press/' + press.slug + '/full-article'} class="mt-2">
        <ButtonStyles xs>
          full article
        </ButtonStyles>
      </a>
    </div>
  {/if}
</DetailsWrapper>

<slot />
