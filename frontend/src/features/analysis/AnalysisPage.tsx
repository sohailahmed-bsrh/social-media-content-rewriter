import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../../components/ui/Header/Header';
import { Button } from '../../components/ui/Button/Button';
import { Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import styles from './AnalysisPage.module.css';

export const AnalysisPage: React.FC = () => {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { analysis, tone } = location.state || {};

  useEffect(() => {
    // Sequence of animations
    const t1 = setTimeout(() => setPhase(1), 1500);
    const t2 = setTimeout(() => setPhase(2), 3000);
    const t3 = setTimeout(() => setPhase(3), 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const isComplete = phase === 3;

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        {!isComplete ? (
          <div className={styles.processingState}>
            <div className={styles.spinnerContainer}>
               <Sparkles className={styles.sparkleIcon} size={48} />
               <div className={styles.pulseRing}></div>
            </div>
            <h2 className={styles.processingTitle}>Basirah is analyzing your content</h2>
            <ul className={styles.processingList}>
              <li className={`${styles.processingItem} ${phase >= 0 ? styles.active : ''}`}>
                <CheckCircle2 size={20} className={phase >= 1 ? styles.checkDone : styles.checkPending} />
                <span>Understanding your article...</span>
              </li>
              <li className={`${styles.processingItem} ${phase >= 1 ? styles.active : ''}`}>
                <CheckCircle2 size={20} className={phase >= 2 ? styles.checkDone : styles.checkPending} />
                <span>Extracting the core message...</span>
              </li>
              <li className={`${styles.processingItem} ${phase >= 2 ? styles.active : ''}`}>
                <CheckCircle2 size={20} className={phase >= 3 ? styles.checkDone : styles.checkPending} />
                <span>Identifying key points...</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.reviewState}>
            <div className={styles.successHeader}>
              <div className={styles.successIconWrapper}>
                <CheckCircle2 size={32} className={styles.successIcon} />
              </div>
              <h1 className={styles.reviewTitle}>Your content is ready.</h1>
              <p className={styles.reviewSubtitle}>Basirah has extracted the core meaning to maintain consistency across platforms.</p>
            </div>

            <div className={styles.analysisCards}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Summary</h3>
                <p className={styles.cardText}>
                  {analysis?.summary || 'No summary available.'}
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Core Message</h3>
                <p className={styles.cardHighlight}>
                  {analysis?.core_message || 'No core message available.'}
                </p>
              </div>

              <div className={styles.cardGroup}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Key Points</h3>
                  <ul className={styles.pointList}>
                    {analysis?.key_points?.map((point: string, i: number) => (
                      <li key={i}>{point}</li>
                    )) || <li>No key points available.</li>}
                  </ul>
                </div>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Detected Tone</h3>
                  <div className={styles.toneBadge}>
                    {analysis?.detected_tone || tone || 'Professional'}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.actionArea}>
              <Button 
                variant="primary" 
                size="large"
                onClick={() => navigate('/platforms', { state: location.state })}
                className={styles.continueBtn}
              >
                Choose Platform <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
