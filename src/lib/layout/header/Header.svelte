<script lang="ts">
  import Icon from "svelte-awesome";
  import user from "svelte-awesome/icons/user";
  import tint from "svelte-awesome/icons/tint";
  import home from "svelte-awesome/icons/home";
  import bars from "svelte-awesome/icons/bars";

  function handleChangeThemeClick(arg) {
    const html = document.querySelector("html");
    html.dataset.theme = arg;
  }

  let themes = ["cupcake","emerald", "forest", "cmyk", "halloween", "dark", "mytheme"];
</script>

<header class="navbar mb-2 bg-base-300">
  <div class="icons btn btn-ghost rounded-btn">
    <a href="/" id="toggle-a">
      <Icon data={bars} scale={2} />
    </a>
  </div>
  <div class="icons btn btn-ghost rounded-btn">
    <a href="/">
      <Icon data={home} scale={2} />
      <!-- <img src="logox.svg" alt="v logo" class="img"> -->
    </a>
  </div>

  <div class="flex flex-1 justify-end px-2">
    <div class="flex  items-stretch">
      <div class="dropdown-end dropdown">
        <div tabindex="0" class="icons btn btn-ghost rounded-btn">
          <Icon data={tint} scale={2} />
        </div>
        <ul tabindex="0" class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
          {#each themes as theme, i}
            <li on:click|preventDefault={() => handleChangeThemeClick(theme)}>
              <a href="##">{theme}</a>
            </li>
          {/each}
        </ul>
      </div>
      <!-- <a href="/about" class="btn btn-ghost rounded-btn"> About </a> -->
      <div class="icons btn btn-ghost rounded-btn">
        <a href="/auth">
          <Icon data={user} scale={2} />
        </a>
      </div>
    </div>
  </div>
</header>

<style>
  header {
    width: 100%;
    filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.3));
    overflow: show;
    position: fixed;
    top: 0;
    z-index: 99;
    --tw-bg-opacity: .95;
  }

  .menu {
    /* z-index: 99; */
  }

  .icons {
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: center; */
    /* align-items: center; */
    padding: 0 0.5rem;
  }

  /* .img {
    max-height: 42px;
    fill: aqua;
    color: red;
  } */
</style>
