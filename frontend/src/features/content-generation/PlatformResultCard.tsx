import React from 'react';
import { CopyButton } from './CopyButton';
import { DownloadButton } from './DownloadButton';
import { RegenerateButton } from './RegenerateButton';
import { CheckCircle2, Loader2 } from 'lucide-react';
import styles from './PlatformResultCard.module.css';
import { GenerationStatus } from './types';

interface PlatformResultCardProps {
  platformName: string;
  icon: React.ReactNode;
  status: GenerationStatus;
  rawTextForCopy: string;
  filename: string;
  children: React.ReactNode;
  animationDelay?: string;
  onRegenerate?: () => void;
}

export const PlatformResultCard: React.FC<PlatformResultCardProps> = ({
  platformName,
  icon,
  status,
  rawTextForCopy,
  filename,
  children,
  animationDelay = '0s',
  onRegenerate
}) => {
  return (
    <div className={styles.card} style={{ animationDelay }}>
      <div className={styles.header}>
        <div className={styles.platformInfo}>
          <div className={styles.iconWrapper}>{icon}</div>
          <h2 className={styles.platformName}>{platformName}</h2>
        </div>
        <div className={styles.statusBadge}>
          {status === 'generating' && (
            <span className={styles.statusGenerating}>
              <Loader2 size={14} className={styles.spin} /> Generating...
            </span>
          )}
          {status === 'success' && (
            <span className={styles.statusSuccess}>
              <CheckCircle2 size={14} /> Generated
            </span>
          )}
          {status === 'error' && (
            <span className={styles.statusError}>
              Failed
            </span>
          )}
        </div>
      </div>

      <div className={styles.contentArea}>
        {status === 'generating' ? (
          <div className={styles.skeletonArea}>
            <div className={styles.skeletonLine} style={{ width: '90%' }}></div>
            <div className={styles.skeletonLine} style={{ width: '100%' }}></div>
            <div className={styles.skeletonLine} style={{ width: '80%' }}></div>
            <div className={styles.skeletonLine} style={{ width: '60%' }}></div>
          </div>
        ) : (
          <div className={styles.textContent}>{children}</div>
        )}
      </div>

      {status === 'success' && (
        <div className={styles.actionBar}>
          <div className={styles.primaryActions}>
            <CopyButton content={rawTextForCopy} />
            <DownloadButton content={rawTextForCopy} filename={filename} />
          </div>
          <div className={styles.secondaryActions}>
            <RegenerateButton onRegenerate={onRegenerate} />
          </div>
        </div>
      )}
    </div>
  );
};
