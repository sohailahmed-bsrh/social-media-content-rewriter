import React, { useState, forwardRef } from 'react';
import { Input, InputProps } from './Input';
import { Eye, EyeOff } from 'lucide-react';
import styles from './PasswordField.module.css';

export const PasswordField = forwardRef<HTMLInputElement, Omit<InputProps, 'type' | 'icon' | 'iconPosition'>>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
      setShowPassword(!showPassword);
    };

    const ToggleIcon = (
      <button
        type="button"
        className={styles.toggleButton}
        onClick={toggleVisibility}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <EyeOff size={18} strokeWidth={2} />
        ) : (
          <Eye size={18} strokeWidth={2} />
        )}
      </button>
    );

    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        ref={ref}
        icon={ToggleIcon}
        iconPosition="right"
        {...props}
      />
    );
  }
);

PasswordField.displayName = 'PasswordField';
