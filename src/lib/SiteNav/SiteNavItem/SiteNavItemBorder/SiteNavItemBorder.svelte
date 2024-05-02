<script>
  export let selected
</script>

<div class="relative w-fit h-fit p-0.5 pl-0 -mb-1 left-3.5 rounded-l-full ml-0 rounded-l-none rounded-r-full {
  selected
    ? 'z-10 from-primary-md/80 to-primary/80 bg-gradient-to-r'
    : 'bg-primary-md'
}">
  <div class="bg-black rounded-l-none rounded-r-full">
    <slot/>
  </div>
</div>