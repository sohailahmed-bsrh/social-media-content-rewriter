import React from 'react';
import styles from './LoginBrandPanel.module.css';
import { Sparkles } from 'lucide-react';

export const LoginBrandPanel: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoArea}>
        <div className={styles.logoIcon}>
          <Sparkles size={24} color="var(--color-primary-accent)" />
        </div>
        <span className={styles.logoText}>Basirah</span>
      </div>
      
      <div className={styles.contentArea}>
        <h1 className={styles.headline}>
          One article.<br />
          <span className={styles.highlight}>Every channel.</span>
        </h1>
        <p className={styles.subheadline}>
          Turn your ideas into platform-ready content with AI.
        </p>
      </div>
      
      <div className={styles.footerArea}>
        <p>© {new Date().getFullYear()} Basirah. All rights reserved.</p>
      </div>
    </div>
  );
};
