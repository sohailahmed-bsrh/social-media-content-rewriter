import React from 'react';
import { Mail } from 'lucide-react';
import { PlatformResultCard } from './PlatformResultCard';
import { NewsletterResult } from './types';
import styles from './CardContents.module.css';

interface NewsletterCardProps {
  data: NewsletterResult;
  animationDelay?: string;
  onRegenerate?: () => void;
}

export const NewsletterCard: React.FC<NewsletterCardProps> = ({ data, animationDelay, onRegenerate }) => {
  return (
    <PlatformResultCard
      platformName="Email Newsletter"
      icon={<Mail size={20} className={styles.emailIcon} />}
      status={data.status}
      rawTextForCopy={data.rawTextForCopy}
      filename="basirah-newsletter.txt"
      animationDelay={animationDelay}
      onRegenerate={onRegenerate}
    >
      <div className={styles.newsletterContainer}>
        <div className={styles.metaArea}>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Subject:</span>
            <span className={styles.metaValue}>{data.subject}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Preview:</span>
            <span className={styles.metaValue}>{data.preview}</span>
          </div>
        </div>
        <div className={styles.newsletterBody}>
          <div className={styles.newsletterSection}>
            {data.body?.split('\n').filter(p => p.trim() !== '').map((paragraph, pIndex) => (
              <p key={pIndex} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>
          {data.cta && (
            <div className={styles.newsletterSection}>
              <p className={styles.paragraph}><strong>{data.cta}</strong></p>
            </div>
          )}
          {data.closing && (
            <div className={styles.newsletterSection}>
              <p className={styles.paragraph}><em>{data.closing}</em></p>
            </div>
          )}
        </div>
      </div>
    </PlatformResultCard>
  );
};
