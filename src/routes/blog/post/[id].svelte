<script>
  import { onMount } from "svelte";
  import { base, assets } from "$app/paths";
  import { page } from '$app/stores';


  // populated with data from the endpoint
  // export const id;

  onMount(async () => {
    // const response = await fetch(`/api/blog/post/${id}`);
    // const data = await response.json();
    // console.log(base);
    // console.log(assets);
    console.log($page);
    console.log($page.params.id);

    // // populate the data
    // id = data.id;

    // const foo = url.searchParams.get('foo');
  });
</script>

<!-- <h1>{id}</h1> -->
<!-- <h1>{$path}</h1> -->

