<script>
  import SvelteSeo from "svelte-seo";

  import Icon from "svelte-awesome";
  // import { beer, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  import user from "svelte-awesome/icons/user";
  import key from "svelte-awesome/icons/key";
</script>

<SvelteSeo
  title="Valmor Auth"
  description="Authentication page for valmor.dev"
  openGraph={{
    title: "Valmor Auth",
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
/>

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
