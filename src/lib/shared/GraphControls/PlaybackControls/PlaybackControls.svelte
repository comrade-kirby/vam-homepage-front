<script>
  import { selectedVideoPlayer, cameraZoom, forceGraph, selectedPaused, selectedVolume} from '$lib/stores'
  import { ButtonStyles, Icon } from '$lib'

  $: isMuted = $selectedVolume === 0
  $: isPaused = $selectedPaused
  $: console.log('is paused: ', isPaused)
</script>

{#if $selectedVideoPlayer}
  <div class="pointer-events-auto flex m-4 space-x-1">
    <button class="bg-dark/40 rounded-lg" 
      on:click={() => isMuted ? $forceGraph.unMute() : $forceGraph.mute()}
    >
      <ButtonStyles outline layout xl>
        <Icon name={isMuted ? 'unmute' : 'mute'} />
      </ButtonStyles>
    </button>
    
    <div class="pointer-events-auto flex space-x-4 px-6 bg-dark/40 border border-white/90 hover:border-secondary/90 rounded-lg">
      <button on:click={() => cameraZoom.zoomIn()}>
        <ButtonStyles layout xl>
          <Icon name="prev" />
        </ButtonStyles>
      </button>

      <button on:click={() => isPaused ? $forceGraph.playSelected() : $forceGraph.pauseSelected()}>
        <ButtonStyles layout xl>
          <Icon name={isPaused ? 'play' : 'pause'} />
        </ButtonStyles>
      </button>

      <button on:click={() => cameraZoom.zoomOut()}>
        <ButtonStyles layout xl>
          <Icon name="next" />
        </ButtonStyles>
      </button>
    </div>

    
    <button on:click={() => cameraZoom.zoomOut()} class="bg-dark/40 rounded-lg">
      <ButtonStyles outline layout xl>
        <Icon name="fullscreen" />
      </ButtonStyles>
    </button>
  </div>
{/if}