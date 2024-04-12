<script>
  export let width
</script>

<div class="relative z-20 h-screen bg-background-primary/70 backdrop-blur-sm flex flex-col flex-initial {width} h-full max-h-full overflow-hidden p-4 pb-8 border-r border-black-olive/10">
  <slot />
</div>