<script>
  import { PaneNavigation } from '$lib'

  export let minimizedIconText, minimizedLabelText, show, closeUrl
</script>

<div class="pointer-events-auto w-full h-fit p-4 bg-black/50 backdrop-blur-sm border border-primary-md/80">
  <PaneNavigation minimized {closeUrl} {show} {minimizedIconText} {minimizedLabelText} />
</div>