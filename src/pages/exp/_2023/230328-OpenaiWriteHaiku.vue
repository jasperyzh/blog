<template>
    <form @submit.prevent="submitForm">
        <label for="haiku">
            Enter your choice of topic for haiku:
        </label>
        <input type="text" id="haiku" v-model="haiku_topic" placeholder="e.g. Cloudy picnic" required>
        <button type="submit">Submit</button>
    </form>
<pre @click="clickToCopy">
{{ response.trim() }}
</pre>

</template>

<script setup>
import { ref } from "vue";
import { Configuration, OpenAIApi } from "openai";
import { copyToClipboard } from "../../../layouts/Utils";

const configuration = new Configuration({
    apiKey: import.meta.env.PUBLIC_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const haiku_topic = ref('');
const response = ref('[text_here]');

async function start() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `write a haiku about ${haiku_topic.value}`,
        temperature: 0,
        max_tokens: 30,
    });

    // console.log(response.data.choices[0].text);

    const generated_haiku = response.data.choices[0].text;

    copyToClipboard(generated_haiku);

    return generated_haiku;
}

async function submitForm() {
    response.value = await start();
}


/* async function clickToCopy(event){
    const getText = event.target.innerText.trim();
    copyToClipboard(getText);
} */

</script>

<!-- 
chill japanese lunch with colleague

Sushi and tea,
A chill lunch with a friend,
Peaceful and serene.

 -->