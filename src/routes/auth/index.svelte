<script>
  import SvelteSeo from "svelte-seo";

  import Icon from "svelte-awesome";
  // import { beer, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  import user from "svelte-awesome/icons/user";
  import key from "svelte-awesome/icons/key";
</script>

<svelte:head>
  <meta property="og:title" content="Valmor Auth" />
  <meta property="og:description" content="Authentication page for valmor.dev" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://valmor.dev" />
  <meta property="og:image" content="%sveltekit.assets%/img/logo192.png" />
  <meta property="og:image:width" content="192" />
  <meta property="og:image:height" content="192" />
</svelte:head>

<!-- <SvelteSeo
  title="Valmor Auth"
  description="Authentication page for valmor.dev"
  openGraph={{
    title: "Valmor Auth",
    description: "Authentication page for valmor.dev",
    url: "https://www.valmor.dev/auth",
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
/> -->

<section class="">
  <h1>Auth</h1>

  <Icon data={user} scale={10} />

  <div class="login-form">
    <div class="form-control">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <label class="input-group">
        <span>
          <Icon data={user} />
        </span>
        <input type="text" placeholder="email" class="input input-bordered" />
      </label>
    </div>
    <div class="form-control">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <label class="input-group">
        <span>
          <Icon data={key} />
        </span>
        <input type="text" placeholder="password" class="input input-bordered" />
      </label>
    </div>
    <div class="form-commands">
      <button class="btn btn-primary btn-disabled">Sign In</button>
      <!-- <button class="btn btn-secondary">Sign Up</button> -->
      <!-- <button class="btn btn-ghost">Recover Access</button> -->
    </div>
  </div>
</section>

<style>
  section {
    padding-top: 12px;
    padding-bottom: 120px;

    display: flex;
    flex-direction: column;
    /* // justify-content: center; */
    align-items: center;
    min-height: 100vh;
  }

  .img {
    border-radius: 50%;
    filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.3));
  }

  .login-form {
    max-width: 320px;
  }

  .form-commands {
    display: flex;
    flex-direction: column;
    margin: 12px 1px;
  }

  .btn {
    margin: 12px;
  }
</style>
