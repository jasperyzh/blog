import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function start() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 12,
  });

  console.log(response.data.choices[0].text);
}

start();