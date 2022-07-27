<script lang="ts">
  export const image = '';
  //export const cardBtnActionTxt;
  export const title = "";
  export const description = "";
 // export const newPost = false;
</script>

<div class="card bg-base-100 shadow-lg">
  <!--
  {#if image}
    <figure><img src={image} alt="Shoes" /></figure>
  {/if}
  -->
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    {#if description}
      <p>{description}</p>
    {/if}
    {#if newPost}
      <div class="badge badge-secondary">NEW</div>
    {/if}
    <!--
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{cardBtnActionTxt}</button>
    </div>
    -->
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

  .card {
    max-width: 72rem;
    margin: 1rem;
  }

  .card-body {
    padding: 1.2rem;
  }

  img {
    max-width: 180px;
  }
</style>
