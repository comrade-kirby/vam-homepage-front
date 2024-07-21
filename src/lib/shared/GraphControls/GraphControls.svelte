<script>
  import ZoomControls from './ZoomControls/ZoomControls.svelte'
  import PlaybackControls from './PlaybackControls/PlaybackControls.svelte'

  export let position
</script>

<div class="{position} m-4 flex items-start justify-end self-end flex-wrap-reverse min-h-0">
  <PlaybackControls />
  <ZoomControls />
</div>