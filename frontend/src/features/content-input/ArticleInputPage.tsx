import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/ui/Header/Header';
import { ArticleEditor } from './ArticleEditor';
import { ContentMetrics } from './ContentMetrics';
import { ToneSelector } from './ToneSelector';
import { GenerateAction } from './GenerateAction';
import { SourceSelector, SourceMode } from './SourceSelector';
import { ArticleUrlInput } from './ArticleUrlInput';
import { ArticleUpload } from './ArticleUpload';
import styles from './ArticleInputPage.module.css';

const MAX_LENGTH = 25000;

export const ArticleInputPage: React.FC = () => {
  const [sourceMode, setSourceMode] = useState<SourceMode>('paste');
  const [articleContent, setArticleContent] = useState('');
  const [articleUrl, setArticleUrl] = useState('');
  const [tone, setTone] = useState('Professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  // Basic URL validation
  const isUrlValid = articleUrl.trim() === '' || /^https?:\/\//i.test(articleUrl);

  const handleGenerate = async () => {
    if (sourceMode === 'paste' && !articleContent.trim()) return;
    if (sourceMode === 'url' && (!articleUrl.trim() || !isUrlValid)) return;
    
    // We only support paste right now as URL scraping isn't implemented in the backend yet.
    const articleToAnalyze = sourceMode === 'paste' ? articleContent : `Please extract content from this URL: ${articleUrl}`;
    
    setIsGenerating(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/content/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ article: articleToAnalyze }),
      });

      if (!response.ok) {
        throw new Error('Backend analysis failed');
      }

      const { data: analysisResult } = await response.json();

      setIsGenerating(false);
      navigate('/analyze', { 
        state: { 
          sourceMode,
          articleContent,
          articleUrl,
          tone,
          analysis: analysisResult
        } 
      });
    } catch (error) {
      console.error(error);
      alert('Failed to connect to the AI backend. Please ensure the server is running and your GROQ_API_KEY is configured.');
      setIsGenerating(false);
    }
  };

  const isOverLimit = sourceMode === 'paste' && articleContent.length > MAX_LENGTH;
  
  const isGenerateDisabled = isGenerating ||
    (sourceMode === 'paste' && (articleContent.trim().length === 0 || isOverLimit)) ||
    sourceMode === 'url' ||
    sourceMode === 'upload';

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.introSection}>
          <h1 className={styles.pageTitle}>
            Turn one article into content for every channel.
          </h1>
        </div>

        <SourceSelector mode={sourceMode} onModeChange={setSourceMode} />

        <div className={styles.workspaceSection}>
          <div className={styles.inputArea}>
            {sourceMode === 'paste' ? (
              <div className={styles.editorArea}>
                <div className={styles.editorHeader}>
                  <label className={styles.editorLabel}>Article</label>
                  <ContentMetrics text={articleContent} maxLength={MAX_LENGTH} />
                </div>
                
                <ArticleEditor 
                  value={articleContent} 
                  onChange={setArticleContent} 
                  maxLength={MAX_LENGTH} 
                />
              </div>
            ) : sourceMode === 'url' ? (
              <div className={styles.urlArea}>
                <div className={styles.editorHeader}>
                  <label className={styles.editorLabel}>Article URL</label>
                </div>
                <ArticleUrlInput 
                  value={articleUrl} 
                  onChange={setArticleUrl} 
                  isValid={isUrlValid}
                />
              </div>
            ) : (
              <div className={styles.uploadArea}>
                <ArticleUpload />
              </div>
            )}
          </div>

          <div className={styles.optionsArea}>
            <ToneSelector value={tone} onChange={setTone} />
            <GenerateAction 
              isGenerating={isGenerating} 
              isDisabled={isGenerateDisabled} 
              onClick={handleGenerate} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticleInputPage;
