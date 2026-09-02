import React, { useState } from 'react';
import { Link2, AlertCircle } from 'lucide-react';
import styles from './ArticleUrlInput.module.css';

interface ArticleUrlInputProps {
  value: string;
  onChange: (val: string) => void;
  isValid?: boolean;
}

export const ArticleUrlInput: React.FC<ArticleUrlInputProps> = ({ value, onChange, isValid }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Simple URL validation just for visual feedback
  const hasError = value.length > 0 && !isValid;

  return (
    <div className={styles.container}>
      <div className={styles.hintArea}>
        <p className={styles.hintText}>Paste the link to an article or blog post.</p>
        <p className={styles.hintSubtext}>Basirah will use the article content as the source for your generated content.</p>
      </div>
      
      <div className={`${styles.inputWrapper} ${isFocused ? styles.focused : ''} ${hasError ? styles.error : ''}`}>
        <div className={styles.iconWrapper}>
          <Link2 size={20} className={styles.icon} />
        </div>
        <input
          type="url"
          className={styles.input}
          placeholder="https://example.com/article"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label="Article URL"
        />
      </div>
      
      {hasError && (
        <div className={styles.errorMessage}>
          Please enter a valid URL including http:// or https://
        </div>
      )}

      <div className={styles.noticeArea}>
        <AlertCircle size={20} className={styles.noticeIcon} />
        <p className={styles.noticeText}>
          Backend URL extraction is currently pending integration. Providing a URL will not scrape the article at this time.
        </p>
      </div>
    </div>
  );
};
