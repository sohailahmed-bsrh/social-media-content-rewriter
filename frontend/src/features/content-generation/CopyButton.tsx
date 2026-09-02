import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import styles from './ActionButtons.module.css';

interface CopyButtonProps {
  content: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button 
      className={`${styles.actionBtn} ${copied ? styles.success : ''}`} 
      onClick={handleCopy}
      type="button"
      aria-label="Copy content"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? 'Copied ✓' : 'Copy'}</span>
    </button>
  );
};
