import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import styles from './ActionButtons.module.css';

interface RegenerateButtonProps {
  onRegenerate?: () => void;
}

export const RegenerateButton: React.FC<RegenerateButtonProps> = ({ onRegenerate }) => {
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerate = () => {
    setIsRegenerating(true);
    if (onRegenerate) {
      onRegenerate();
    }
    setTimeout(() => setIsRegenerating(false), 1500);
  };

  return (
    <button 
      className={`${styles.actionBtn} ${styles.secondary}`} 
      onClick={handleRegenerate}
      type="button"
      disabled={isRegenerating}
    >
      <RefreshCw size={16} className={isRegenerating ? styles.spin : ''} />
      <span>Regenerate</span>
    </button>
  );
};
