<script lang="ts">
    import "@fontsource/roboto/400.css";
    import SvelteMarkdown from "svelte-markdown";

    export let form: {response: string, prompt: string} = {prompt: "", response: undefined};
</script>

<div class="container">
  <div class="writing">
    <h2>Text</h2>
    <form method="POST" action="/copyeditor">
      <textarea name="text" rows="20">{form?.prompt || ""}</textarea>
      <button class="feedback" type="submit">Get Feedback</button>
    </form>
  </div>
  <div class="critique">
    <h2>Feedback</h2>
    {#if form}
    <SvelteMarkdown source={form?.response}/>
    {/if}
  </div>
</div>

<style>
    .container {
        padding: 0rem;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 1rem);
    }

    .container div {
        padding: 1rem;
        display: inline-block;
        width: 50%;
        overflow: auto;
    }

    .writing textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0;
        resize: none;
    }

    .critique {
        padding: 4px;
    }

    .critique h2 {
        text-align: right;
    }

    .feedback {
        display: block;
        margin: 0 auto;
        width: 100%;
        padding: 0.25em;
        font-size: 1rem;
    }
</style>