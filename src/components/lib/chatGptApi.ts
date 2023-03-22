import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function fetchRecipes(
  ingredients: string[]
): Promise<string | undefined> {
  const prompt = `Rezepte mit folgenden Zutaten: ${ingredients.join(
    ", "
  )}. Bitte geben Sie einige Rezeptvorschläge und Anweisungen.`;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.data.choices[0].message?.content;
}
