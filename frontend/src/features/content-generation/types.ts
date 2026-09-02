export type GenerationStatus = 'pending' | 'generating' | 'success' | 'error';

export interface BaseGeneratedResult {
  platform: 'x' | 'linkedin' | 'email';
  status: GenerationStatus;
  rawTextForCopy: string; // The text that will be copied/downloaded
}

export interface TwitterResult extends BaseGeneratedResult {
  platform: 'x';
  posts: string[]; // Thread of tweets
}

export interface LinkedInResult extends BaseGeneratedResult {
  platform: 'linkedin';
  title: string;
  hook: string;
  content: string;
  cta: string;
}

export interface NewsletterResult extends BaseGeneratedResult {
  platform: 'email';
  subject: string;
  preview: string;
  body: string;
  cta: string;
  closing: string;
}

export type GeneratedResult = TwitterResult | LinkedInResult | NewsletterResult;
