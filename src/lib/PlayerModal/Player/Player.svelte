<script>
  import Player from '@vimeo/player'
  import { onMount } from 'svelte';
  
  export let work

  let w
  let h

  onMount(() => {
    console.log('width: ', w)
    
    const player = new Player('vimeo-container', {
      id: work.videoId,
      url: work.oembedData.url,
      portrait: false,
      quality_selector: false,
      title: false,
      transcript: false,
      vimeo_logo: false,
      chromecast: false,
      byline: false,
      airplay: false,
      speed: false,
      width: w,
      height: h,
      // controls: false,
      pip: false
    })
  })
</script>

<div class="sticky z-20 top-0 w-full" bind:clientWidth={w} bind:clientHeight={h}>
  <div id="vimeo-container" ></div>
</div>
<!-- <div class="sticky z-20 top-0 w-full aspect-video bg-slate-400">
  <iframe src="https://player.vimeo.com/video/{video_id}?h={hash_parameter}" 
  width="{video_width}" height="{video_height}" frameborder="0" title="{video_title}" webkitallowfullscreen mozallowfullscreen allowfullscreen>
</iframe>
</div> -->
