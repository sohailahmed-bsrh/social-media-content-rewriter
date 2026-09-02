export interface ValidationResult {
  passed: boolean;
  score: number;
  issues: string[];
  suggestions: string[];
}

export function validateContent(generatedContent: any, platform: string, analysis: any): ValidationResult {
  // A deterministic check for structural completeness. 
  // An LLM evaluator can be added here later if strict requirements dictate it.
  const issues: string[] = [];
  
  if (!generatedContent) {
    return { passed: false, score: 0, issues: ["Empty content generated."], suggestions: [] };
  }

  if (platform === 'x' && (!generatedContent.posts || generatedContent.posts.length === 0)) {
    issues.push("Twitter thread missing posts array.");
  }

  if (platform === 'linkedin' && (!generatedContent.content || !generatedContent.hook)) {
    issues.push("LinkedIn post missing hook or content.");
  }

  if (platform === 'email' && (!generatedContent.subject || !generatedContent.body)) {
    issues.push("Newsletter missing subject or body.");
  }

  const passed = issues.length === 0;
  
  return {
    passed,
    score: passed ? 100 : 50,
    issues,
    suggestions: passed ? [] : ["Regenerate content to fix structural issues."]
  };
}
