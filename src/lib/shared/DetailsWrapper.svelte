<script>
  import PaneNavigation from '$lib/shared/PaneNavigation.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'

  export let closeUrl, title, subtitle, width = "w-128"
  import { retreatRight } from '$lib/stores'

  const hoverOn = () => retreatRight.set(false)
  const hoverOff = () => retreatRight.set(true)
  const toggleRetreatRight = () => retreatRight.update(prev => !prev)
</script>

<main class="absolute right-0 h-full max-h-full {$retreatRight && '-right-80'}"
  on:mouseenter={hoverOn}
  on:mouseleave={hoverOff}
>
  <ContentPane {width} background={$retreatRight ? 'bg-bg-darkest/60' : 'bg-bg-dark/60'}>
    <PaneNavigation onTouch={toggleRetreatRight} {title} {subtitle} {closeUrl} />
    
    <ScrollContainer onTouch={hoverOn}>
      <slot />
    </ScrollContainer>
  </ContentPane>
</main>
