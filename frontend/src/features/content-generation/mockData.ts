import { TwitterResult, LinkedInResult, NewsletterResult } from './types';

export const mockTwitterResult: TwitterResult = {
  platform: 'x',
  status: 'pending',
  posts: [
    "AI is changing how we build software, but the biggest shift isn't in code generation—it's in contextual understanding. Let's talk about why semantic awareness is the real breakthrough. 🧵 1/4",
    "Historically, we've relied on simple text replacement and syntactic templates. But when you move content across platforms, the implicit meaning and tone get lost in translation. 2/4",
    "Enter semantic AI architectures. By extracting the 'Core Message' before generating output, we can adapt a single idea into a 280-character tweet or a full newsletter without losing its soul. 3/4",
    "The future of AI-assisted creation isn't about writing faster; it's about translating ideas more accurately across mediums. What's your take on semantic generation? 👇 4/4"
  ],
  rawTextForCopy: `AI is changing how we build software, but the biggest shift isn't in code generation—it's in contextual understanding. Let's talk about why semantic awareness is the real breakthrough. 🧵 1/4\n\nHistorically, we've relied on simple text replacement and syntactic templates. But when you move content across platforms, the implicit meaning and tone get lost in translation. 2/4\n\nEnter semantic AI architectures. By extracting the 'Core Message' before generating output, we can adapt a single idea into a 280-character tweet or a full newsletter without losing its soul. 3/4\n\nThe future of AI-assisted creation isn't about writing faster; it's about translating ideas more accurately across mediums. What's your take on semantic generation? 👇 4/4`
};

export const mockLinkedInResult: LinkedInResult = {
  platform: 'linkedin',
  status: 'pending',
  hook: "AI is changing how we build software, but the biggest shift isn't in code generation.",
  body: [
    "It's in contextual understanding.",
    "For years, we've relied on simple text replacement and syntactic templates to automate content. But when you move content across platforms (from an article to a tweet, or to an email), the implicit meaning and professional tone often get lost in translation.",
    "This is where semantic AI architectures come in.",
    "By first extracting the 'Core Message' of an article before generating any output, we can adapt a single, powerful idea into multiple formats without losing its soul. It's not just about writing faster—it's about translating ideas more accurately across mediums.",
    "I believe the future of AI-assisted creation lies in this semantic preservation.",
    "How are you leveraging AI to maintain your core message across different platforms? Let's discuss in the comments."
  ],
  rawTextForCopy: `AI is changing how we build software, but the biggest shift isn't in code generation.\n\nIt's in contextual understanding.\n\nFor years, we've relied on simple text replacement and syntactic templates to automate content. But when you move content across platforms (from an article to a tweet, or to an email), the implicit meaning and professional tone often get lost in translation.\n\nThis is where semantic AI architectures come in.\n\nBy first extracting the 'Core Message' of an article before generating any output, we can adapt a single, powerful idea into multiple formats without losing its soul. It's not just about writing faster—it's about translating ideas more accurately across mediums.\n\nI believe the future of AI-assisted creation lies in this semantic preservation.\n\nHow are you leveraging AI to maintain your core message across different platforms? Let's discuss in the comments.`
};

export const mockNewsletterResult: NewsletterResult = {
  platform: 'email',
  status: 'pending',
  subject: "The Real Breakthrough in AI: Semantic Understanding",
  preview: "Why AI code generation is just the beginning...",
  sections: [
    {
      body: [
        "Hi there,",
        "We often talk about how AI is accelerating the way we write code and content. But the biggest shift happening right now isn't just about speed—it's about contextual understanding."
      ]
    },
    {
      heading: "Beyond Text Replacement",
      body: [
        "Historically, automation relied on simple text replacement and syntactic templates. The problem? When you move content across different platforms, the implicit meaning and tone get lost.",
        "Enter semantic AI architectures. By extracting the 'Core Message' before generating the final output, we can adapt a single idea into any format without losing its original soul."
      ]
    },
    {
      heading: "Why It Matters",
      body: [
        "The future of AI-assisted creation isn't just about writing faster; it's about translating ideas more accurately across mediums. Whether it's a short social post or a comprehensive email, the semantic core remains intact.",
        "Best regards,\nThe Basirah Team"
      ]
    }
  ],
  rawTextForCopy: `Subject: The Real Breakthrough in AI: Semantic Understanding\nPreview: Why AI code generation is just the beginning...\n\nHi there,\n\nWe often talk about how AI is accelerating the way we write code and content. But the biggest shift happening right now isn't just about speed—it's about contextual understanding.\n\n### Beyond Text Replacement\n\nHistorically, automation relied on simple text replacement and syntactic templates. The problem? When you move content across different platforms, the implicit meaning and tone get lost.\n\nEnter semantic AI architectures. By extracting the 'Core Message' before generating the final output, we can adapt a single idea into any format without losing its original soul.\n\n### Why It Matters\n\nThe future of AI-assisted creation isn't just about writing faster; it's about translating ideas more accurately across mediums. Whether it's a short social post or a comprehensive email, the semantic core remains intact.\n\nBest regards,\nThe Basirah Team`
};
