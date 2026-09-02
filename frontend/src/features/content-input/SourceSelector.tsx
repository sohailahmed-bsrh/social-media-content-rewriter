import React from 'react';
import styles from './SourceSelector.module.css';

export type SourceMode = 'paste' | 'url' | 'upload';

interface SourceSelectorProps {
  mode: SourceMode;
  onModeChange: (mode: SourceMode) => void;
}

export const SourceSelector: React.FC<SourceSelectorProps> = ({ mode, onModeChange }) => {
  const getTransform = () => {
    if (mode === 'paste') return 'translateX(0)';
    if (mode === 'url') return 'translateX(100%)';
    return 'translateX(200%)';
  };

  return (
    <div className={styles.container}>
      <div className={styles.toggleWrapper}>
        <div 
          className={styles.indicator} 
          style={{ transform: getTransform() }}
        />
        <button 
          className={`${styles.tabBtn} ${mode === 'paste' ? styles.active : ''}`}
          onClick={() => onModeChange('paste')}
          type="button"
        >
          Paste Article
        </button>
        <button 
          className={`${styles.tabBtn} ${mode === 'url' ? styles.active : ''}`}
          onClick={() => onModeChange('url')}
          type="button"
        >
          Article URL
        </button>
        <button 
          className={`${styles.tabBtn} ${mode === 'upload' ? styles.active : ''}`}
          onClick={() => onModeChange('upload')}
          type="button"
        >
          Upload File
        </button>
      </div>
    </div>
  );
};
