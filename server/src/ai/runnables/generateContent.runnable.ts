import { generateStructuredOutput } from '../providers/groq.provider';
import { ArticleAnalysis } from '../schemas/analysis.schema';
import { TwitterThreadSchema, TwitterThreadOutput, LinkedInPostSchema, LinkedInPostOutput, NewsletterSchema, NewsletterOutput } from '../schemas/content.schema';
import { TWITTER_GENERATOR_SYSTEM_PROMPT } from '../../prompts/twitter/twitter.generator.prompt';
import { LINKEDIN_GENERATOR_SYSTEM_PROMPT } from '../../prompts/linkedin/linkedin.generator.prompt';
import { NEWSLETTER_GENERATOR_SYSTEM_PROMPT } from '../../prompts/newsletter/newsletter.generator.prompt';

export async function generateTwitterThread(analysis: ArticleAnalysis, tone: string, isRegeneration?: boolean, previousContent?: string): Promise<TwitterThreadOutput> {
  let userMessage = `Create a Twitter thread based on this analysis.\nTone required: ${tone}\n\nAnalysis:\n${JSON.stringify(analysis, null, 2)}`;
  
  if (isRegeneration) {
    userMessage += `\n\nIMPORTANT: This is a REGENERATION request. DO NOT output the same content as before. You MUST create a significantly different variation with a new angle, different hook, and fresh phrasing.\nPrevious content for reference (DO NOT REPEAT):\n${previousContent}`;
  }

  return generateStructuredOutput<TwitterThreadOutput>(
    TWITTER_GENERATOR_SYSTEM_PROMPT,
    userMessage,
    "TwitterThread",
    TwitterThreadSchema
  );
}

export async function generateLinkedInPost(analysis: ArticleAnalysis, tone: string, isRegeneration?: boolean, previousContent?: string): Promise<LinkedInPostOutput> {
  let userMessage = `Create a LinkedIn post based on this analysis.\nTone required: ${tone}\n\nAnalysis:\n${JSON.stringify(analysis, null, 2)}`;
  
  if (isRegeneration) {
    userMessage += `\n\nIMPORTANT: This is a REGENERATION request. DO NOT output the same content as before. You MUST create a significantly different variation with a new angle, different hook, and fresh phrasing.\nPrevious content for reference (DO NOT REPEAT):\n${previousContent}`;
  }

  return generateStructuredOutput<LinkedInPostOutput>(
    LINKEDIN_GENERATOR_SYSTEM_PROMPT,
    userMessage,
    "LinkedInPost",
    LinkedInPostSchema
  );
}

export async function generateNewsletter(analysis: ArticleAnalysis, tone: string, isRegeneration?: boolean, previousContent?: string): Promise<NewsletterOutput> {
  let userMessage = `Create a Newsletter based on this analysis.\nTone required: ${tone}\n\nAnalysis:\n${JSON.stringify(analysis, null, 2)}`;
  
  if (isRegeneration) {
    userMessage += `\n\nIMPORTANT: This is a REGENERATION request. DO NOT output the same content as before. You MUST create a significantly different variation with a new angle, different hook, and fresh phrasing.\nPrevious content for reference (DO NOT REPEAT):\n${previousContent}`;
  }

  return generateStructuredOutput<NewsletterOutput>(
    NEWSLETTER_GENERATOR_SYSTEM_PROMPT,
    userMessage,
    "Newsletter",
    NewsletterSchema
  );
}
