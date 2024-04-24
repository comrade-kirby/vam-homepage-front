<script>
  export let selected
</script>

<div class="relative w-fit h-fit -mb-1 p-0.5 pl-0 rounded-r-full {
  selected
    ? 'left-3.5 z-10 bg-gradient-to-r from-bprimary/80 to-bsecondary/80'
    : 'left-2.5 ml-1 bg-bprimary'
}">
  <div class="bg-bg-darkest rounded-r-full">
    <slot/>
  </div>
</div>