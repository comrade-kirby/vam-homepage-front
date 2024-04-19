<script>
  import PaneNavigation from '$lib/shared/PaneNavigation.svelte'
  import ContentPane from '$lib/shared/ContentPane.svelte'
  import ScrollContainer from './ScrollContainer.svelte'

  export let closeUrl, title, subtitle, width = "w-128"
  import { retreatRight } from '$lib/stores'

  const show = () => retreatRight.set(false)
  const hide = () => retreatRight.set(true)
</script>

<div class="absolute h-full right-0">

  <main class="relative h-full max-h-full {$retreatRight && '-right-3/4'}">
    <ContentPane {width} background={$retreatRight ? 'bg-bg-darkest/60' : 'bg-bg-dark/60'}>
      <PaneNavigation {hide} {show} {closeUrl} {title} {subtitle} />
      
      <ScrollContainer {show}>
        <slot />
      </ScrollContainer>
    </ContentPane>
  </main>
</div>
