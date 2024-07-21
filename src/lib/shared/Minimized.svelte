<script>
  import { PaneNavigation } from '$lib'

  export let minimizedIconText, minimizedLabelText, show, closeUrl
  export let { minimizedBottom, minimizedFloating, minimized } = false
</script>

<div class="pointer-events-auto w-full h-fit">
  <PaneNavigation {closeUrl} {show} {minimizedIconText} {minimizedLabelText} {minimized} {minimizedBottom} {minimizedFloating} />
</div>