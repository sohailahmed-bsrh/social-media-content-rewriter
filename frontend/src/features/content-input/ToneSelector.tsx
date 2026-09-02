import React from 'react';
import { Briefcase, MessageCircle, GraduationCap, Zap, Heart, Lightbulb } from 'lucide-react';
import styles from './ToneSelector.module.css';

interface ToneSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const TONES = [
  { id: 'Professional', icon: Briefcase, desc: 'Polished and authoritative' },
  { id: 'Conversational', icon: MessageCircle, desc: 'Casual and engaging' },
  { id: 'Educational', icon: GraduationCap, desc: 'Informative and clear' },
  { id: 'Bold', icon: Zap, desc: 'Strong and confident' },
  { id: 'Friendly', icon: Heart, desc: 'Warm and approachable' },
  { id: 'Thoughtful', icon: Lightbulb, desc: 'Deep and analytical' }
];

export const ToneSelector: React.FC<ToneSelectorProps> = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Tone</label>
      <div className={styles.grid}>
        {TONES.map(tone => {
          const Icon = tone.icon;
          const isSelected = value === tone.id;
          return (
            <button
              key={tone.id}
              type="button"
              className={`${styles.toneCard} ${isSelected ? styles.selected : ''}`}
              onClick={() => onChange(tone.id)}
              aria-pressed={isSelected}
            >
              <div className={styles.iconWrapper}>
                <Icon size={18} />
              </div>
              <div className={styles.toneInfo}>
                <span className={styles.toneName}>{tone.id}</span>
                <span className={styles.toneDesc}>{tone.desc}</span>
              </div>
              {isSelected && <div className={styles.selectedIndicator} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
