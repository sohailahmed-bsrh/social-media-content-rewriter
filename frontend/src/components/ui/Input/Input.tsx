import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', icon, iconPosition = 'right', id, ...props }, ref) => {
    const generatedId = id || React.useId();
    
    return (
      <div className={`${styles.container} ${className}`}>
        {label && (
          <label htmlFor={generatedId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          <input
            id={generatedId}
            ref={ref}
            className={`${styles.input} ${error ? styles.hasError : ''} ${icon ? styles['hasIcon' + iconPosition] : ''}`}
            aria-invalid={!!error}
            {...props}
          />
          {icon && (
            <div className={`${styles.iconContainer} ${styles['icon' + iconPosition]}`}>
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className={styles.errorMessage} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
