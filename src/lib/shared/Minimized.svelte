<script>
  import { PaneNavigation } from '$lib'

  export let minimizedIconText, minimizedLabelText, show, closeUrl
</script>

<div class="pointer-events-auto w-full h-fit">
  <PaneNavigation minimized {closeUrl} {show} {minimizedIconText} {minimizedLabelText} />
</div>