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

<svelte:head>
  <title>About valmor.dev</title>
  <meta name="description" content="About valmor.dev" />
  <meta property="og:title" content="Valmor" />
  <meta property="og:description" content="About valmor.dev" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://valmor.dev" />
  <meta property="og:image" content="https://valmor.dev/img/logo192.png" />
  <meta property="og:image:width" content="192" />
  <meta property="og:image:height" content="192" />
</svelte:head>

<!-- <SvelteSeo
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
/> -->

<section class="">
  <!-- <h1>About</h1> -->

  <div class="avatar">
    <div class="w-64 rounded-full">
      <img src="img/meb.jpeg" alt="Valmor" />
    </div>
  </div>

  <article class="prose lg:prose-xl">
    <h2 style="text-align: center;">Hi, I'm Valmor!</h2>

    <p>I'm an engineer, software developer and tech savvy who loves building things.</p>

    <p>
      I'm long-time Linux user, familiar with the terminal and enthusiastic of web applications
      development and the internet of things.
    </p>

    <p>
      I've a degree in Naval Engineering and currently I'm pursuing a second one in Electrical &
      Electronics Engineerig.
    </p>

    <p>
      If you want to know more about me, you can <a href="/about/curriculum">refer to my resume section</a>.
    </p>

    <p>I'm always open for a nice chat. You can reach me on my social networks.</p>

    <!-- <p>Soldering iron is my favorite programming language.</p> -->
  </article>

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
