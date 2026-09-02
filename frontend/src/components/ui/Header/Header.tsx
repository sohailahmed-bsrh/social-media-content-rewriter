import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <img src="/src/assets/logo.jpeg" alt="Basirah Logo" className={styles.actualLogo} />
          </div>
          <span className={styles.logoText}>Basirah</span>
        </div>
        <div className={styles.accountArea}>
          {/* Top-right icon removed as per audit */}
        </div>
      </div>
    </header>
  );
};
