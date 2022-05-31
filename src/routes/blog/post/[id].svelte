<script>
  import { onMount } from "svelte";

  // populated with data from the endpoint
  export let id;

  onMount(async () => {
    // const response = await fetch(`/api/blog/post/${id}`);
    // const data = await response.json();
    console.log(id);
    // // populate the data
    // id = data.id;
  });
</script>

<h1>{id}</h1>
