<script context="module">
  export const prerender = true;
</script>

<script>
  import Counter from "$lib/Counter.svelte";
</script>

<svelte:head>
  <title>Valmor Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hero min-w-full min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <h1>Hi, I'm Valmor.</h1>
    <p>I'm an engineer and software developer who loves to build things.</p>

    <a href="/about">
      <div class="avatar">
        <div class="w-64 rounded-full">
          <img src="meb.jpeg" alt="Valmor" />
        </div>
      </div>
    </a>
  </div>
</section>

<style>
  section,
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
  }

  .avatar {
    /* border-radius: 50%; */
    filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.3));
  }

  /* 
  h1 {
    width: 100%;
  }

  .welcome {
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  } */
</style>
