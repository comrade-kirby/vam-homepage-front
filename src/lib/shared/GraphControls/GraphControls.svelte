<script>
  import { cameraZoom } from '$lib/stores'
  import ButtonStyles from '../ButtonStyles.svelte'

  export let offset
</script>

<div class="{offset} pointer-events-auto flex self-end p-4 z-20 flex">
  <div class="flex flex-col space-y-1">
    <button on:click={() => cameraZoom.zoomIn()} class="bg-dark/40 rounded-lg">
      <ButtonStyles outline layout xl>
        <span>{@html '&plus;'}</span>
      </ButtonStyles>
    </button>
    <button on:click={() => cameraZoom.zoomOut()} class="bg-dark/40 rounded-lg">
      <ButtonStyles outline layout xl>
        <span>{@html '&minus;'}</span>
      </ButtonStyles>
    </button>
  </div>
</div>