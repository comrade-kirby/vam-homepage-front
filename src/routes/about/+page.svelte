<script>
  import { GraphControls, Prose, FullPageWrapper, ButtonStyles } from '$lib'
  import logo from '$lib/images/VAM-logo.png'
  import headshot from '$lib/images/headshot.jpg'
    import { openContactModal } from '$lib/stores';
</script>

<FullPageWrapper minimizedLabelText="/about" minimizedIconText="nav" closeUrl='/'>
  <div class="flex justify-center items-start p-12 space-x-12">
    <div class="flex flex-col items-end space-y-6 sticky top-12">
      <img src={logo} class="w-60 object-contain" alt="VAM Studio Logo" />
      <button on:click={ () => openContactModal.set(true)} class="w-fit">
        <ButtonStyles outline layout>
          <span>Contact</span>
        </ButtonStyles>
      </button>
    </div>
    <Prose>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit ipsum ab suscipit voluptatum nulla hic quidem illo quam. Voluptatibus eveniet numquam repellat doloremque voluptas, asperiores reprehenderit dolorem molestias vero?</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim expedita cum, laudantium repellat maiores, doloremque magnam vero sequi mollitia necessitatibus vitae ea accusamus facilis, ipsa possimus reprehenderit explicabo suscipit beatae?</p>
      <div class="flex justify-end space-x-6">
        <img src={headshot} class="w-44 object-contain" />
        <img src={headshot} class="w-44 object-contain" />
      </div>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora accusamus, harum voluptates corrupti error delectus quam expedita, adipisci beatae recusandae ipsum molestiae, totam itaque. Architecto quas perferendis iste optio.</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt laboriosam enim sapiente debitis, tenetur illo incidunt fugit ea commodi iure molestias quia doloribus porro numquam qui unde amet consequuntur!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt laboriosam enim sapiente debitis, tenetur illo incidunt fugit ea commodi iure molestias quia doloribus porro numquam qui unde amet consequuntur!</p>
    </Prose>
  </div>
  

</FullPageWrapper>

<GraphControls position="col-start-4 row-start-2 col-span-1" />