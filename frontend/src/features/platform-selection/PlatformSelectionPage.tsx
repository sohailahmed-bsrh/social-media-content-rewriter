import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../../components/ui/Header/Header';
import { Button } from '../../components/ui/Button/Button';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import styles from './PlatformSelectionPage.module.css';

type Platform = 'x' | 'linkedin' | 'email';

export const PlatformSelectionPage: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { analysis, tone, articleContent, sourceMode, articleUrl } = location.state || {};

  const handleContinue = () => {
    if (selectedPlatform) {
      navigate(`/generate/${selectedPlatform}`, { 
        state: {
          analysis,
          tone,
          selectedPlatform,
          articleContent,
          sourceMode,
          articleUrl
        }
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.introSection}>
          <h1 className={styles.pageTitle}>Where do you want to publish?</h1>
          <p className={styles.pageSubtitle}>
            Choose a platform and Basirah will adapt your content for it.
          </p>
        </div>

        <div className={styles.cardGrid}>
          <button 
            className={`${styles.platformCard} ${selectedPlatform === 'x' ? styles.selected : ''}`}
            onClick={() => setSelectedPlatform('x')}
            style={{ animationDelay: '0.1s' }}
            type="button"
          >
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.xIcon}`}>
                <Twitter size={24} />
              </div>
              <h3 className={styles.platformName}>X</h3>
            </div>
            <p className={styles.platformDescription}>
              Create a concise, engaging thread.
            </p>
          </button>

          <button 
            className={`${styles.platformCard} ${selectedPlatform === 'linkedin' ? styles.selected : ''}`}
            onClick={() => setSelectedPlatform('linkedin')}
            style={{ animationDelay: '0.2s' }}
            type="button"
          >
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.linkedinIcon}`}>
                <Linkedin size={24} />
              </div>
              <h3 className={styles.platformName}>LinkedIn</h3>
            </div>
            <p className={styles.platformDescription}>
              Turn your article into a professional LinkedIn post.
            </p>
          </button>

          <button 
            className={`${styles.platformCard} ${selectedPlatform === 'email' ? styles.selected : ''}`}
            onClick={() => setSelectedPlatform('email')}
            style={{ animationDelay: '0.3s' }}
            type="button"
          >
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrapper} ${styles.emailIcon}`}>
                <Mail size={24} />
              </div>
              <h3 className={styles.platformName}>Email Newsletter</h3>
            </div>
            <p className={styles.platformDescription}>
              Transform your article into a reader-friendly newsletter.
            </p>
          </button>
        </div>

        <div className={styles.actionArea}>
          <Button 
            variant="primary" 
            size="large"
            disabled={!selectedPlatform}
            onClick={handleContinue}
            className={styles.continueBtn}
          >
            Generate Content
          </Button>
        </div>
      </main>
    </div>
  );
};
