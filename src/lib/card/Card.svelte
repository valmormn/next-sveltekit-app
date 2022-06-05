<script>
  export let image;
  export let cardBtnActionTxt;
  export let title;
  export let description;
  export let newPost = false;
</script>

<div class="card bg-base-100 shadow-lg">
  <figure><img src={image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    {#if newPost}
      <div class="badge badge-secondary">NEW</div>
    {/if}
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{cardBtnActionTxt}</button>
    </div>
  </div>
</div>

<style>
  /* 
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  } 
  */

  /*.card {
    margin: 1rem;
  }
  */

  img {
    max-width: 240px;
  }
</style>
