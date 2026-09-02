import React, { useState, useRef, useEffect } from 'react';
import { FileText } from 'lucide-react';
import styles from './ArticleEditor.module.css';

interface ArticleEditorProps {
  value: string;
  onChange: (val: string) => void;
  maxLength?: number;
}

export const ArticleEditor: React.FC<ArticleEditorProps> = ({ value, onChange, maxLength = 25000 }) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isEmpty = value.length === 0;
  const isOverLimit = value.length > maxLength;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(400, textareaRef.current.scrollHeight)}px`;
    }
  }, [value]);

  return (
    <div className={`${styles.container} ${isFocused ? styles.focused : ''} ${isOverLimit ? styles.error : ''}`}>
      <div className={styles.editorWrapper}>
        {isEmpty && !isFocused && (
          <div className={styles.emptyState} aria-hidden="true">
            <div className={styles.emptyIcon}>
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <p className={styles.emptyText}>Paste your article or blog post here...</p>
            <p className={styles.emptyHint}>Give Basirah the original content. We'll preserve its core message while adapting it for each platform.</p>
          </div>
        )}
        
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused && isEmpty ? "Paste your article or blog post here..." : ""}
          aria-label="Article content"
        />
      </div>
    </div>
  );
};
