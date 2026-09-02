import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

const groqApiKey = process.env.GROQ_API_KEY;

if (!groqApiKey) {
  console.warn("WARNING: GROQ_API_KEY is not defined in the environment.");
}

export const groqClient = new Groq({
  apiKey: groqApiKey || 'placeholder-key',
});

export const GROQ_MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';

export async function generateStructuredOutput<T>(
  systemPrompt: string,
  userMessage: string,
  schemaName: string,
  jsonSchema: any
): Promise<T> {
  if (!groqApiKey) {
    throw new Error("GROQ_API_KEY is missing. Please configure the server environment.");
  }

  try {
    const response = await groqClient.chat.completions.create({
      model: GROQ_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: schemaName,
          schema: jsonSchema,
          strict: true
        }
      },
      temperature: 0.2, // Low temp for more deterministic structured outputs
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error("Received empty content from Groq.");
    }

    return JSON.parse(content) as T;
  } catch (error: any) {
    console.error("Groq Provider Error:", error.message || error);
    throw new Error(`AI generation failed: ${error.message || "Unknown error"}`);
  }
}
