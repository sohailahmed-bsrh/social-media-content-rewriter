export const ArticleAnalysisSchema = {
  type: "object",
  properties: {
    summary: { type: "string" },
    core_message: { type: "string" },
    key_points: { type: "array", items: { type: "string" } },
    detected_tone: { type: "string" },
    important_facts: { type: "array", items: { type: "string" } },
    audience: { type: "string" },
    content_type: { type: "string" }
  },
  required: [
    "summary",
    "core_message",
    "key_points",
    "detected_tone",
    "important_facts",
    "audience",
    "content_type"
  ],
  additionalProperties: false
};

export interface ArticleAnalysis {
  summary: string;
  core_message: string;
  key_points: string[];
  detected_tone: string;
  important_facts: string[];
  audience: string;
  content_type: string;
}
