import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ingredients = req.body.ingredients;

  const prompt = `Rezepte mit folgenden Zutaten: ${ingredients.join(
    ", "
  )}. Bitte geben Sie einige Rezeptvorschläge und Anweisungen.`;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  console.log(completion.data.choices);

  const data = completion.data.choices[0].message?.content;

  res.json(data);
}
