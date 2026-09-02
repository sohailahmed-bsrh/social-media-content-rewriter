import React from 'react';
import { Twitter } from 'lucide-react';
import { PlatformResultCard } from './PlatformResultCard';
import { TwitterResult } from './types';
import styles from './CardContents.module.css';

interface PlatformCardProps {
  data: TwitterResult;
  animationDelay?: string;
  onRegenerate?: () => void;
}

export const TwitterThreadCard: React.FC<PlatformCardProps> = ({ data, animationDelay, onRegenerate }) => {
  return (
    <PlatformResultCard
      platformName="X / Twitter"
      icon={<Twitter size={20} className={styles.twitterIcon} />}
      status={data.status}
      rawTextForCopy={data.rawTextForCopy}
      filename="basirah-x-thread.txt"
      animationDelay={animationDelay}
      onRegenerate={onRegenerate}
    >
      <div className={styles.threadContainer}>
        {data.posts.map((post, index) => (
          <div key={index} className={styles.tweetWrapper}>
            <div className={styles.tweetNumber}>{String(index + 1).padStart(2, '0')}</div>
            <div className={styles.tweetContent}>{post}</div>
          </div>
        ))}
      </div>
    </PlatformResultCard>
  );
};
