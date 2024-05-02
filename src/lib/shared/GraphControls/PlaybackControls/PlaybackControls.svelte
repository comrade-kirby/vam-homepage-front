<script>
  import { goto } from '$app/navigation'

  import { selected, selectedVideoPlayer, flatNodeList, forceGraph, selectedPaused, selectedVolume} from '$lib/stores'
  import { ButtonStyles, Icon } from '$lib'

  const next = () => {
    const maxIndex = $flatNodeList.length - 1
    const selectedIndex = $flatNodeList.findIndex(node => node === $selected)

    const nextIndex = selectedIndex < maxIndex 
      ? selectedIndex + 1 
      : 0

    const slug = $flatNodeList[nextIndex].data.slug
    goto(slug)
  }

  const previous = () => {
    const maxIndex = $flatNodeList.length - 1
    const selectedIndex = $flatNodeList.findIndex(node => node === $selected)
    const nextIndex = selectedIndex > 0 
      ? selectedIndex - 1
      : maxIndex

    const slug = $flatNodeList[nextIndex].data.slug
    goto(slug)
  }

  $: isMuted = $selectedVolume === 0
  $: isPaused = $selectedPaused
</script>

{#if $selectedVideoPlayer}
  <div class="pointer-events-auto flex space-x-1 mt-3">
    <button class="bg-dark/40 rounded-lg" 
      on:click={() => isMuted ? $forceGraph.unMute() : $forceGraph.mute()}
    >
      <ButtonStyles outline layout xl>
        <Icon name={isMuted ? 'unmute' : 'mute'} />
      </ButtonStyles>
    </button>
    
    <div class="pointer-events-auto flex space-x-4 px-6 bg-dark/40 border border-white/90 hover:border-secondary/90 rounded-lg">
      <button on:click={previous}>
        <ButtonStyles layout xl>
          <Icon name="prev" />
        </ButtonStyles>
      </button>

      <button on:click={() => isPaused ? $forceGraph.playSelected() : $forceGraph.pauseSelected()}>
        <ButtonStyles layout xl>
          <Icon name={isPaused ? 'play' : 'pause'} />
        </ButtonStyles>
      </button>

      <button on:click={next}>
        <ButtonStyles layout xl>
          <Icon name="next" />
        </ButtonStyles>
      </button>
    </div>

    
    <button on:click={() => $forceGraph.openFullscreen()} class="bg-dark/40 rounded-lg">
      <ButtonStyles outline layout xl>
        <Icon name="fullscreen" />
      </ButtonStyles>
    </button>
  </div>
{/if}