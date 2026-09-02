import React from 'react';
import styles from './ContentMetrics.module.css';

interface ContentMetricsProps {
  text: string;
  maxLength: number;
}

export const ContentMetrics: React.FC<ContentMetricsProps> = ({ text, maxLength }) => {
  const chars = text.length;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const isNearLimit = chars > maxLength * 0.9;
  const isOverLimit = chars > maxLength;

  return (
    <div className={styles.container}>
      <span className={styles.metric}>
        {words.toLocaleString()} {words === 1 ? 'word' : 'words'}
      </span>
      <span className={styles.separator}>·</span>
      <span className={`${styles.metric} ${isNearLimit ? styles.warning : ''} ${isOverLimit ? styles.error : ''}`}>
        {chars.toLocaleString()} / {maxLength.toLocaleString()} chars
      </span>
    </div>
  );
};
