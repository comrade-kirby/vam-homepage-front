
<script>
  import { afterNavigate, beforeNavigate } from '$app/navigation'
  import Loading from '$lib/shared/Loading.svelte'
  import ButtonStyles from '$lib/shared/ButtonStyles.svelte'
  import BlockQuote from '$lib/shared/BlockQuote.svelte'

  export let press
  const { publication, snippet, url } = press

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
</script>

{#if loading}
  <Loading />
{:else if !validFrame}
  <BlockQuote content={snippet} />

  <div class="flex mt-2 p-4 border border-orange-800/60 bg-orange-400/10 w-fit ">
    <span class="text-xs mr-2 text-black-olive/70">content unavailable: </span>
    <ButtonStyles orange xs>
      <a class="underline"href={url} target="_blank">view on {publication} &#10548</a>
    </ButtonStyles>
  </div>
{/if}

<div bind:this={container} class="h-full {(!loading && validFrame) ? 'visible' : 'invisible'}">
  <iframe bind:this={frame} src={url} style="width:100%; height:100%;" frameborder="0"></iframe>
</div>