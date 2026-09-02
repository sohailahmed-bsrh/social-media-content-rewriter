import React from 'react';
import { Linkedin } from 'lucide-react';
import { PlatformResultCard } from './PlatformResultCard';
import { LinkedInResult } from './types';
import styles from './CardContents.module.css';

interface LinkedInPostCardProps {
  data: LinkedInResult;
  animationDelay?: string;
  onRegenerate?: () => void;
}

export const LinkedInPostCard: React.FC<LinkedInPostCardProps> = ({ data, animationDelay, onRegenerate }) => {
  return (
    <PlatformResultCard
      platformName="LinkedIn"
      icon={<Linkedin size={20} className={styles.linkedinIcon} />}
      status={data.status}
      rawTextForCopy={data.rawTextForCopy}
      filename="basirah-linkedin-post.txt"
      animationDelay={animationDelay}
      onRegenerate={onRegenerate}
    >
      <div className={styles.linkedinContainer}>
        {data.title && <h3 className={styles.sectionHeading}>{data.title}</h3>}
        {data.hook && <div className={styles.hook}>{data.hook}</div>}
        <hr className={styles.separator} />
        <div className={styles.body}>
          {data.content?.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>
        {data.cta && (
          <>
            <hr className={styles.separator} style={{ margin: '1rem 0' }} />
            <div className={styles.cta}>
              <p className={styles.paragraph}><strong>{data.cta}</strong></p>
            </div>
          </>
        )}
      </div>
    </PlatformResultCard>
  );
};
