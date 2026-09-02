import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../components/ui/Header/Header';
import { ArrowLeft } from 'lucide-react';
import { TwitterThreadCard } from './TwitterThreadCard';
import { LinkedInPostCard } from './LinkedInPostCard';
import { NewsletterCard } from './NewsletterCard';
import { GeneratedResult } from './types';
import { LoadingExperience } from './LoadingExperience';
import styles from './GeneratedContentPage.module.css';

export const GeneratedContentPage: React.FC = () => {
  const { platform } = useParams<{ platform: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { analysis, tone, articleContent, sourceMode, articleUrl } = location.state || {};

  const [resultData, setResultData] = useState<GeneratedResult | null>(null);

  const generatePlatform = useCallback(async (isRegeneration = false) => {
    if (!platform) return;
    
    if (!analysis) {
      setResultData({ platform: platform as any, status: 'error', errorMsg: 'Missing article analysis. Please go back and provide an article.' } as any);
      return;
    }

    setResultData(prev => {
      if (isRegeneration && prev) {
        return { ...prev, status: 'regenerating' } as GeneratedResult;
      }
      return { platform: platform as any, status: 'generating' } as GeneratedResult;
    });
    
    try {
      const bodyPayload: any = {
        articleAnalysis: analysis,
        platform: platform === 'newsletter' ? 'email' : platform,
        tone: tone || 'Professional'
      };

      if (isRegeneration && resultData?.rawTextForCopy) {
        bodyPayload.isRegeneration = true;
        bodyPayload.previousContent = resultData.rawTextForCopy;
      }

      const res = await fetch('http://localhost:5000/api/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload)
      });
      
      if (!res.ok) throw new Error(`Failed to generate ${platform}`);
      
      const { data } = await res.json();
      
      let rawTextForCopy = '';
      if (platform === 'x' && data.posts) {
        rawTextForCopy = data.posts.join('\n\n');
      } else if (platform === 'linkedin') {
        rawTextForCopy = `${data.title}\n\n${data.hook}\n\n${data.content}\n\n${data.cta}`.trim();
      } else if (platform === 'email' || platform === 'newsletter') {
        rawTextForCopy = `Subject: ${data.subject}\nPreview: ${data.preview}\n\n${data.body}\n\n${data.cta}\n\n${data.closing}`.trim();
      }

      setResultData({
        platform: platform as any,
        status: 'success',
        ...data,
        rawTextForCopy
      } as GeneratedResult);
    } catch (err) {
      console.error(err);
      setResultData({ platform: platform as any, status: 'error' } as GeneratedResult);
    }
  }, [analysis, platform, tone, resultData?.rawTextForCopy]);

  useEffect(() => {
    // Only generate on mount if we haven't started yet
    if (!resultData) {
      generatePlatform(false);
    }
  }, [generatePlatform, resultData]);

  const handleBack = () => {
    navigate('/platforms', {
      state: { analysis, tone, articleContent, sourceMode, articleUrl }
    });
  };

  const handleRegenerate = () => {
    generatePlatform(true);
  };

  const renderCard = () => {
    if (!resultData) return null;

    if (resultData.status === 'generating') {
      return (
        <div className={styles.loadingWrapper}>
          <LoadingExperience platform={platform as any} />
        </div>
      );
    }

    const cardContent = (() => {
      switch (platform) {
        case 'x':
          return <TwitterThreadCard data={resultData as any} onRegenerate={handleRegenerate} />;
        case 'linkedin':
          return <LinkedInPostCard data={resultData as any} onRegenerate={handleRegenerate} />;
        case 'email':
        case 'newsletter':
          return <NewsletterCard data={resultData as any} onRegenerate={handleRegenerate} />;
        default:
          return <div>Unsupported platform</div>;
      }
    })();

    return (
      <div className={`${styles.cardWrapper} ${resultData.status === 'regenerating' ? styles.regeneratingOverlay : ''}`}>
        {cardContent}
        {resultData.status === 'regenerating' && (
          <div className={styles.processingOverlay}>
             <LoadingExperience platform={platform as any} />
          </div>
        )}
      </div>
    );
  };

  const getPlatformLabel = () => {
    if (platform === 'x') return 'X thread';
    if (platform === 'linkedin') return 'LinkedIn post';
    if (platform === 'email' || platform === 'newsletter') return 'email newsletter';
    return 'content';
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.navigationRow}>
          <button className={styles.backButton} onClick={handleBack} disabled={resultData?.status === 'generating' || resultData?.status === 'regenerating'}>
            <ArrowLeft size={16} />
            <span>Back to Platforms</span>
          </button>
        </div>

        <div className={styles.introSection}>
          <h1 className={styles.pageTitle}>
            {!resultData 
              ? 'Initializing...'
              : resultData.status === 'generating' 
              ? `Creating your ${getPlatformLabel()}...` 
              : resultData.status === 'regenerating'
              ? `Re-imagining your ${getPlatformLabel()}...`
              : resultData.status === 'error'
              ? `Couldn't generate your ${getPlatformLabel()}.`
              : 'Your content is ready.'}
          </h1>
          
          {resultData?.status === 'error' && (resultData as any).errorMsg && (
             <p className={styles.pageSubtitle} style={{ color: 'var(--color-error)' }}>
               {(resultData as any).errorMsg}
             </p>
          )}

          {resultData?.status === 'success' && (
            <p className={styles.pageSubtitle}>
              Basirah adapted your article for {getPlatformLabel()} while preserving its core message.
            </p>
          )}
        </div>

        <div className={styles.workspace}>
          {renderCard()}
        </div>
      </main>
    </div>
  );
};

export default GeneratedContentPage;

