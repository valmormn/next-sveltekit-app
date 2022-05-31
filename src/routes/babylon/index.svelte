<script context="module">
  import SvelteSeo from "svelte-seo";

  import { browser, dev } from "$app/env";

  // import Icon from "svelte-awesome";
  // import { beer, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  // import codepen from "svelte-awesome/icons/codepen";
  // import twitter from "svelte-awesome/icons/twitter";
  // import github from "svelte-awesome/icons/github";

  import { Engine } from "@babylonjs/core/Engines/engine";
  import { Scene } from "@babylonjs/core/scene";
  import { Vector3 } from "@babylonjs/core/Maths/math";
  import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
  import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
  import { Mesh } from "@babylonjs/core/Meshes/mesh";
  // import { GridMaterial } from "@babylonjs/materials/grid";
  import { onMount } from "svelte";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  onMount(() => {
    const canvas = document.getElementById("renderCanvas");
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, false);
    const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
    const sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;
    // const material = new GridMaterial("grid", scene);
    // material.gridRatio = 0.1;
    // material.mainColor = new BABYLON.Color3(0.7, 0.7, 0.7);
    // material.lineColor = new BABYLON.Color3(0.7, 0.7, 0.7);
    // sphere.material = material;
    var ground = Mesh.CreateGround("ground1", 6, 6, 2, scene);
    engine.runRenderLoop(() => {
      scene.render();
    });
  });
</script>

<svelte:head>
  <title>Valmor. Babylonjs</title>
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
  <h1>Babylonjs</h1>
  <canvas id="renderCanvas" touch-action="none" />
</section>

<style>
  section {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  }

  #renderCanvas {
    width: 100%;
    height: 100%;
    display: block;
    font-size: 0;
  }
</style>
