<script lang="ts">
    import "@fontsource/roboto/400.css";
    import SvelteMarkdown from "svelte-markdown";

    export let form: {response: string, prompt: string} = {prompt: "", response: undefined};
</script>

<div class="container">
  <div class="panes">
    <div class="pane writing">
      <h2>Input Text</h2>
      <form method="POST" action="/">
        <textarea name="text" rows="20">{form?.prompt || ""}</textarea>
        <button class="feedback" type="submit">Get Feedback</button>
      </form>
    </div>
    <div class="pane critique">
      <h2>Feedback</h2>
      {#if form}
      <SvelteMarkdown source={form?.response}/>
      {/if}
    </div>
  </div>
</div>

<style>
    .panes {
        display: flex;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    .pane {
        flex: 1;
        margin-right: 10px;
        padding: 20px;
        box-sizing: border-box;
        background: #f9f9f9;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .pane:last-child {
        margin-right: 0;
    }

    textarea, .critique {
        width: 100%;
        height: calc(100% - 70px);
        margin-bottom: 10px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #ddd;
        font-size: 16px;
        line-height: 1.5;
        resize: none;
    }

    button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background: #007BFF;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background: #0056b3;
    }

    h2 {
        margin-bottom: 10px;
    }
</style>