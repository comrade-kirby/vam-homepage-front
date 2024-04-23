
<script>
  import { afterNavigate, beforeNavigate } from '$app/navigation'

  import SectionWrapper from './SectionWrapper.svelte'
  import Loading from '$lib/shared/Loading.svelte'
  import ButtonStyles from '$lib/shared/ButtonStyles.svelte'
  import BlockQuote from '$lib/shared/BlockQuote.svelte'

  export let press
 
  let container, frame, loading, validFrame

  // NEEDED: removes iframe's history entry before back
  beforeNavigate(() => frame.remove())
  afterNavigate(() => {
    loading = true
    validFrame = false
    
    container.append(frame)

    frame.addEventListener("load", () => {
      try {
        frame.contentWindow[0]
        validFrame = true
      }
      catch { validFrame = false }
      loading = false
    })
  })

  $: publication = press.publication
  $: snippet = press.snippet
  $: url = press.url
</script>

<SectionWrapper dependent={frame} hFull>
  {#if loading}
    <Loading />
  {:else if !validFrame}
    <BlockQuote content={snippet} />
  
    <div class="flex mt-4 p-4 border-2 border-tsecondary/60 bg-orange-400/20 w-fit ">
      <span class="text-xs mr-2 text-tprimary/70">content unavailable: </span>
      <ButtonStyles xs>
        <a class="underline"href={url} target="_blank">view on {publication} &#10548</a>
      </ButtonStyles>
    </div>
  {/if}
  
  <div bind:this={container} class="h-full bg-tprimary/90  {(!loading && validFrame) ? 'visible' : 'invisible'}">
    <iframe bind:this={frame} src={url} style="width:100%; height:100%;" frameborder="0"></iframe>
  </div>
</SectionWrapper>