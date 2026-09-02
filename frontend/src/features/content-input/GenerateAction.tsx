import React from 'react';
import { Button } from '../../components/ui/Button/Button';
import { Sparkles } from 'lucide-react';
import styles from './GenerateAction.module.css';

interface GenerateActionProps {
  isGenerating: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

export const GenerateAction: React.FC<GenerateActionProps> = ({ isGenerating, isDisabled, onClick }) => {
  return (
    <div className={styles.container}>
      <Button 
        variant="primary" 
        onClick={onClick} 
        disabled={isDisabled} 
        isLoading={isGenerating}
        className={styles.generateBtn}
      >
        {!isGenerating && <Sparkles size={18} className={styles.icon} />}
        {isGenerating ? 'Generating...' : 'Generate Content'}
      </Button>
    </div>
  );
};
