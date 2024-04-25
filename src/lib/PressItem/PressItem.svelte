<script>
  import { PUBLIC_CMS_URL } from '$env/static/private'

  export let press

  const pressImageUrl =  PUBLIC_CMS_URL + press.attributes.thumbnail.data.attributes.url
  const href = '/press/' + press.attributes.slug
</script>

<a {href} class="flex flex-col group">
  <p class="text-xs font-medium text-tprimary/80 group-hover:text-orange-900/80 tracking-wide">{press.attributes.publication}</p>
  <img src={pressImageUrl} class="flex grow aspect-square object-cover"/>
</a>