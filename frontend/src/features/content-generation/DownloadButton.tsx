import React from 'react';
import { Download } from 'lucide-react';
import styles from './ActionButtons.module.css';

interface DownloadButtonProps {
  content: string;
  filename: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ content, filename }) => {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button 
      className={styles.actionBtn} 
      onClick={handleDownload}
      type="button"
      aria-label={`Download ${filename}`}
    >
      <Download size={16} />
      <span>Download</span>
    </button>
  );
};
