<script>
  import Icon from "svelte-awesome";
  // import { beer, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  import codepen from "svelte-awesome/icons/codepen";
  import twitter from "svelte-awesome/icons/twitter";
  import github from "svelte-awesome/icons/github";

</script>

<footer class="footer items-center p-4 bg-neutral text-neutral-content">
  <div class="items-center grid-flow-col">
    <a href="/"> 
      <!-- <Icon data={home} scale={2} /> -->
      <!-- <img src="logox.svg" alt="v logo" class="img" /> -->
    </a>
    <!-- <p>2022</p> -->
  </div>
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="https://twitter.com/tuxsaurus" target="_blank">
      <Icon data={twitter} scale={2} />
    </a>
    <a href="https://codepen.io/valmormn" target="_blank">
      <Icon data={codepen} scale={2} />
    </a>
    <a href="https://github.com/valmormn" target="_blank">
      <Icon data={github} scale={2} />
    </a>
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }

  .img {
    width: 50px;
    height: 50px;
    fill: red;
  }
</style>
