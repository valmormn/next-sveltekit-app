<script>
  import SvelteSeo from "svelte-seo";

  import Card from "$lib/card/Card.svelte";
  import { onMount } from "svelte";

  import listinha from "./postList.js";

  onMount(() => {
    console.log("Blog");
  });
</script>

<SvelteSeo
  title="Blog valmor.dev"
  description="Sharing ideas and experiences in this blog."
  openGraph={{
    title: "Valmor",
    description: "Sharing ideas and experiences in this blog.",
    url: "https://www.valmor.dev/blog",
    type: "website",
    images: [
      {
        url: "%sveltekit.assets%/img/logo512.png",
        width: 512,
        height: 512,
        alt: "Valmor Logo",
      },
    ],
  }}
/>

<section class="">
  <h1>Blog</h1>

  <div class="postList">
  {#each listinha as post}
    <Card
      image={post.image}
      title={post.title}
      description={post.description}
      cardBtnActionTxt={post.actionTxt}
    />
  {/each}
  </div>


</section>

<style>

  .postList {
    max-width: 81rem;
  }

  .grid-container {
    /* width: 100vw; */
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /*grid-template-rows: 100px 100px;*/

    grid-gap: 0.9rem;
    margin-top: 0.9rem;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    .grid-container {
      /* display: grid; */
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 590px) {
    .grid-container {
      /* display: grid; */
      grid-template-columns: 1fr;
    }
  }
</style>
