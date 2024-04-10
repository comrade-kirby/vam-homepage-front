<script>
  import { afterNavigate, beforeNavigate } from '$app/navigation'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import PaneNavigation from '$lib/shared/PaneNavigation.svelte'

  export let data

  let container, frame

  // NEEDED: removes iframe's history entry before back
  beforeNavigate(() => frame.remove())
  afterNavigate(() => container.append(frame))

  $: press = data.press.attributes
  $: closeUrl = '/press/' + press.slug
  $: articleUrl =  press.url
</script>

<ContentPane width="flex-initial w-192">
  <PaneNavigation {closeUrl} collapse />

  <div bind:this={container} class="h-full">
    <iframe bind:this={frame} src={articleUrl} style="width:100%; height:100%;" frameborder="0"></iframe>
  </div>
  
</ContentPane>