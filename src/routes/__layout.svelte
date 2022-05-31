<script>
  import SvelteSeo from "svelte-seo";

  import Header from "$lib/layout/header/Header.svelte";
  // import Main from '$lib/layout/main/Main.svelte';
  import Footer from "$lib/layout/footer/Footer.svelte";

  import "../app.css";
  import "$style/style.css";
  import { onMount } from "svelte";

  onMount(() => {
    const toggleAside = () => {
      console.log("toggleAside");
      let aside = {};
      aside.el = document.getElementById("aside");
      aside.display = aside.el.style.display;

      let asideWidth = aside.el.offsetWidth;

      if (aside.display === "none" || aside.el.style.width === "0px") {
        aside.el.style.display = "block";
        // content.style.paddingLeft = "240px";
        aside.el.style.width = "auto";

        let asideWidth = aside.el.offsetWidth;
        console.log(asideWidth);
        document.getElementById("content").style.width = `calc(100% - ${asideWidth + 12}px)`;
        document.getElementById("main").style.justifyContent = "flex-end";
      } else {
        // aside.el.style.display = "none";
        aside.el.style.width = "0px";
        let content = document.getElementById("content");
        content.style.paddingLeft = "0px";
        document.getElementById("content").style.width = `100%`;
      }
    };
    // toggleAside();
    document.getElementById("toggle-a").onclick = (e) => {
      e.preventDefault();
      toggleAside();
    };
  });
</script>

<SvelteSeo
  title="Valmor"
  description="Engineer, developer and tech savvy."
  openGraph={{
    title: "Valmor",
    description: "Engineer, developer and tech savvy.",
    url: "https://www.valmor.dev",
    type: "website",
    images: [
      {
        url: "https://www.valmor.dev/img/logo512.png",
        width: 512,
        height: 512,
        alt: "Valmor Logo",
      },
    ],
  }}
/>

<Header />

<!-- <Main /> -->

<main id="main">
  <aside id="aside" style="display: none;" class="bg-base-300">
    <ul class="menu bg-base-300 w-56">
      <li><a href="/">Home</a></li>
      <li><a href="/auth" class="">Auth</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </aside>
  <content id="content">
    <slot />
  </content>
</main>

<Footer />

<style>
  main {
    display: flex;
    flex-direction: row no-wrap;
    justify-content: flex-start;
    align-items: center;
    padding-top: 64px;
  }

  aside {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    overflow: hidden;
    position: fixed;
    top: 65px;
    left: 0;

    padding: 12px 0;

    min-height: 100vh;
  }

  content {
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  }

  #content * {
    /* display: flex;
    flex-flow: column;
    justify-content: flex-start;

    padding: 99px;
    margin: 200px; */

    /* display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    padding: 24px; */
  }
</style>
