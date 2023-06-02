<template>
  <form @submit.prevent="submitForm">
    <label for="haiku_topic"> Enter what you want to draw: </label>
    <input
      type="text"
      id="haiku_topic"
      v-model="haiku_topic"
      placeholder="e.g. Cloudy on autumn night"
      required
    />
    <label for="haiku_topic"> In style of: </label>
    <input type="text" id="drawing_style" v-model="drawing_style" required />
    <button type="submit">Submit</button>
  </form>
  <div style="display: block; margin-bottom: 1rem">
    <img :src="img_url" alt="[image_here]" />

    <button class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-clipboard"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
        />
        <path
          d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
        />
      </svg>
      Copy filename: {{}}
    </button>
  </div>
  <button @click="isCollapsed = !isCollapsed" v-if="isCollapsed">
    {{ isCollapsed ? "Show" : "Hide" }}
  </button>
  <pre v-if="!isCollapsed" @click="isCollapsed = !isCollapsed">
response:
{{ response }}
</pre
  >
</template>

<script setup>
import { ref } from "vue";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const haiku_topic = ref("");
const drawing_style = ref("Wet on wet oil painting of by Bob Ross.");
const response = ref("[test]");
const img_url = ref("");
const isCollapsed = ref(true);

async function start() {
  const response = await openai.createImage({
    prompt: `${haiku_topic.value}. In style of ${drawing_style}`,
    n: 1,
    // size: "512x512"
    size: "256x256",
  });

  return response;
}
async function submitForm() {
  response.value = await start();
  img_url.value = response.value.data.data[0].url;
}

</script>