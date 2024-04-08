<script>
  export let client, clientPaneOpen

  const href = '/clients/' + client.attributes.slug
  const clientLogoUrl =  'http://localhost:1337' + client.attributes.logo.data.attributes.url
</script>

<a {href} class="flex flex-col group">
  <p class="text-xs mb-1 font-medium text-black-olive/80 group-hover:text-orange-900/80 tracking-wide">{client.attributes.name}</p>
  {#if !clientPaneOpen}
    <img src={clientLogoUrl} class="flex grow object-contain object-top"/>
  {/if}
</a>