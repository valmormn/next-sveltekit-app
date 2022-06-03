<script context="module">
  // import SvelteSeo from "svelte-seo";

  export const prerender = true;
</script>

<script>
  // import Counter from "$lib/Counter.svelte";
</script>

<!-- <SvelteSeo
  title="Valmor"
  description="Engineer, developer and tech savvy."
  openGraph={{
    title: "Valmor",
    description: "Engineer, developer and tech savvy.",
    url: "https://www.valmor.dev",
    type: "website",
    images: [
      {
        url: "https://www.valmor.dev/logo512.png",
        width: 512,
        height: 512,
        alt: "Valmor Logo",
      },
    ],
  }}
/> -->

<section class="hero min-w-full min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <article class="prose">
      <h1>Hi, I'm Valmor.</h1>
      <p>I'm an engineer, software developer and tech savvy who loves building things.</p>
    </article>

    <a href="/about" class="tooltip" data-tip="click to go to about page">
      <div class="avatar dropShadow">
        <div class="w-64 rounded-full">
          <img src="img/meb.jpeg" alt="Valmor" />
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
    /* filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.3)); */
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
