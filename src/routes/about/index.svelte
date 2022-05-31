<script context="module">
  import SvelteSeo from "svelte-seo";

  import { browser, dev } from "$app/env";

  import Icon from "svelte-awesome";
  // import { beer, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  import codepen from "svelte-awesome/icons/codepen";
  import twitter from "svelte-awesome/icons/twitter";
  import github from "svelte-awesome/icons/github";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<SvelteSeo
  title="Valmor About"
  description="Engineer, developer and tech savvy."
  openGraph={{
    title: "Valmor",
    description: "Engineer, developer and tech savvy.",
    url: "https://www.valmor.dev/about",
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
/>

<section class="">
  <!-- <h1>About</h1> -->

  <div class="avatar">
    <div class="w-64 rounded-full">
      <img src="img/meb.jpeg" alt="Valmor" />
    </div>
  </div>

  <div class="prose">
    <h2 style="text-align: center;">Hi, I'm Valmor.</h2>

    <p>
      I'm long-time Linux user, familiar with the terminal and enthusiastic of web applications
      development and internet of things.
    </p>

    <p>
      I've a degree in Naval Engineering having already worked on offshore construction. Currently
      I'm pursuing a second degree in Electronics Engineerig.
    </p>

    <p>I'm always open for a nice chat. You can reach me on my social networks.</p>

    <!-- <p>Soldering iron is my favorite programming language.</p> -->
  </div>

  <div class="social-networks grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <!-- svelte-ignore a11y-missing-attribute -->

    <a href="https://twitter.com/tuxsaurus" target="_blank" class="tooltip" data-tip="twitter">
      <Icon data={twitter} scale={2} />
    </a>
    <a href="https://codepen.io/valmormn" target="_blank" class="tooltip" data-tip="codepen">
      <Icon data={codepen} scale={2} />
    </a>
    <a href="https://github.com/valmormn" target="_blank" class="tooltip" data-tip="github">
      <Icon data={github} scale={2} />
    </a>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    text-align: justify;
  }

  .avatar {
    /* border-radius: 50%; */
    filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.3));
    text-align: center;
    margin: 3rem;
  }

  .prose {
    margin: 0.5rem;
  }

  .social-networks,
  .social-networks * {
    margin: 1.5rem;
  }
</style>
