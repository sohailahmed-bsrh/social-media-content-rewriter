import { Request, Response } from 'express';
import { analyzeArticle } from '../ai/runnables/analyzeArticle.runnable';
import { generateTwitterThread, generateLinkedInPost, generateNewsletter } from '../ai/runnables/generateContent.runnable';
import { validateContent } from '../ai/runnables/validateContent.runnable';

export const analyzeArticleController = async (req: Request, res: Response): Promise<any> => {
  try {
    const { article } = req.body;

    if (!article || typeof article !== 'string' || article.trim() === '') {
      return res.status(400).json({ error: 'Valid article text is required.' });
    }

    const analysis = await analyzeArticle(article);
    return res.status(200).json({ data: analysis });
  } catch (error: any) {
    console.error("Analysis Controller Error:", error);
    return res.status(500).json({ error: error.message || 'Internal server error.' });
  }
};

export const generateContentController = async (req: Request, res: Response): Promise<any> => {
  try {
    const { articleAnalysis, platform, tone, isRegeneration, previousContent } = req.body;

    if (!articleAnalysis || !platform || !tone) {
      return res.status(400).json({ error: 'articleAnalysis, platform, and tone are required.' });
    }

    let generatedContent;
    switch (platform) {
      case 'x':
        generatedContent = await generateTwitterThread(articleAnalysis, tone, isRegeneration, previousContent);
        break;
      case 'linkedin':
        generatedContent = await generateLinkedInPost(articleAnalysis, tone, isRegeneration, previousContent);
        break;
      case 'email':
        generatedContent = await generateNewsletter(articleAnalysis, tone, isRegeneration, previousContent);
        break;
      default:
        return res.status(400).json({ error: 'Unsupported platform.' });
    }

    const validation = validateContent(generatedContent, platform, articleAnalysis);

    return res.status(200).json({
      data: generatedContent,
      validation,
      platform,
      status: validation.passed ? 'success' : 'error'
    });
  } catch (error: any) {
    console.error("Generation Controller Error:", error);
    return res.status(500).json({ error: error.message || 'Internal server error.' });
  }
};
