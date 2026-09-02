export const TwitterThreadSchema = {
  type: "object",
  properties: {
    posts: { type: "array", items: { type: "string" } }
  },
  required: ["posts"],
  additionalProperties: false
};

export interface TwitterThreadOutput {
  posts: string[];
}

export const LinkedInPostSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    hook: { type: "string" },
    content: { type: "string" },
    cta: { type: "string" }
  },
  required: ["title", "hook", "content", "cta"],
  additionalProperties: false
};

export interface LinkedInPostOutput {
  title: string;
  hook: string;
  content: string;
  cta: string;
}

export const NewsletterSchema = {
  type: "object",
  properties: {
    subject: { type: "string" },
    preview: { type: "string" },
    body: { type: "string" },
    cta: { type: "string" },
    closing: { type: "string" }
  },
  required: ["subject", "preview", "body", "cta", "closing"],
  additionalProperties: false
};

export interface NewsletterOutput {
  subject: string;
  preview: string;
  body: string;
  cta: string;
  closing: string;
}
