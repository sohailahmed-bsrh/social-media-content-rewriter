import { generateStructuredOutput } from '../providers/groq.provider';
import { ArticleAnalysisSchema, ArticleAnalysis } from '../schemas/analysis.schema';
import { ARTICLE_ANALYSIS_SYSTEM_PROMPT } from '../../prompts/analysis/article-analysis.prompt';

export async function analyzeArticle(articleContent: string): Promise<ArticleAnalysis> {
  const userMessage = `Please analyze the following article:\n\n${articleContent}`;
  
  return generateStructuredOutput<ArticleAnalysis>(
    ARTICLE_ANALYSIS_SYSTEM_PROMPT,
    userMessage,
    "ArticleAnalysis",
    ArticleAnalysisSchema
  );
}
