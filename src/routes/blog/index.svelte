<script>
  import SvelteSeo from "svelte-seo";

  import Card from "$lib/card/Card.svelte";
  import { onMount } from "svelte";

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

  <div class="cards-grid">
    <Card
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ubuntu_logoib.svg/600px-Ubuntu_logoib.svg.png"
      title="Make your terminal look awesome"
      description="How to improve your terminal look and feel."
      cardBtnActionTxt="Read"
      newPost={true}
    />
    <Card
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ubuntu_logoib.svg/600px-Ubuntu_logoib.svg.png"
      title="Things to do After Installing Ubuntu 22.04 LTS"
      description="Here is a set of tweaks to make your experience better on the new Ubuntu 22.04."
      cardBtnActionTxt="Read"
    />
    <Card
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ubuntu_logoib.svg/600px-Ubuntu_logoib.svg.png"
      title="Things to do After Installing Ubuntu 22.04 LTS"
      description="Here is a set of tweaks to make your experience better on the new Ubuntu 22.04."
      cardBtnActionTxt="Read"
    />
  </div>
</section>

<style>
  .cards-grid {
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
    .cards-grid {
      /* display: grid; */
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 590px) {
    .cards-grid {
      /* display: grid; */
      grid-template-columns: 1fr;
    }
  }
</style>
