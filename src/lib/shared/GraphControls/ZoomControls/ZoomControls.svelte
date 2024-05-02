<script>
  import { cameraZoom } from '$lib/stores'
  import { ButtonStyles } from '$lib'
</script>

<div class="pointer-events-auto flex flex-col ml-3 space-y-1">
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