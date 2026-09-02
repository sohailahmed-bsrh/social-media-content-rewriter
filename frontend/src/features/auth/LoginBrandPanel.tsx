import React from 'react';
import styles from './LoginBrandPanel.module.css';


export const LoginBrandPanel: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundAmbient}></div>
      <div className={styles.content}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <img src="/src/assets/logo.jpeg" alt="Basirah Logo" className={styles.actualLogo} />
          </div>
          <span className={styles.logoText}>Basirah</span>
        </div>
        
        <div className={styles.storyArea}>
          <h1 className={styles.headline}>
            One idea.<br />
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
    </div>
  );
};
