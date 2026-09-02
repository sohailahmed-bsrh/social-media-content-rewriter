import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClass = styles.button;
  const variantClass = styles[variant];
  const widthClass = fullWidth ? styles.fullWidth : '';
  const loadingClass = isLoading ? styles.loading : '';
  
  const combinedClassName = `${baseClass} ${variantClass} ${widthClass} ${loadingClass} ${className}`.trim();

  return (
    <button 
      className={combinedClassName} 
      disabled={disabled || isLoading} 
      {...props}
    >
      {isLoading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : null}
      <span className={styles.content}>{children}</span>
    </button>
  );
};
