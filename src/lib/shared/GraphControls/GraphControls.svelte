<script>
  import ZoomControls from './ZoomControls/ZoomControls.svelte'
  import PlaybackControls from './PlaybackControls/PlaybackControls.svelte'

  export let position
</script>

<div class="{position} flex items-end justify-end min-h-0">
  <PlaybackControls />
  <ZoomControls />
</div>