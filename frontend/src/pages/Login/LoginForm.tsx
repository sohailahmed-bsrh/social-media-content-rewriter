import React, { useState } from 'react';
import { Input } from '../../components/ui/Input/Input';
import { PasswordField } from '../../components/ui/Input/PasswordField';
import { Button } from '../../components/ui/Button/Button';
import { SocialLoginButton } from './SocialLoginButton';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setAuthError('');

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      // Simulate failed login as requested (do not expose backend details)
      setAuthError('Email or password is incorrect.');
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Welcome back</h2>
        <p className={styles.subtitle}>Sign in to continue creating.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {authError && (
          <div className={styles.authError} role="alert">
            {authError}
          </div>
        )}

        <div className={styles.formGroup}>
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            autoComplete="email"
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <PasswordField
            id="password"
            label="Password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            autoComplete="current-password"
            disabled={isLoading}
          />
          <div className={styles.forgotPassword}>
            <a href="#" className={styles.forgotLink}>Forgot password?</a>
          </div>
        </div>

        <Button 
          type="submit" 
          fullWidth 
          variant="primary" 
          isLoading={isLoading}
          className={styles.submitBtn}
        >
          Sign in
        </Button>
      </form>

      <div className={styles.divider}>
        <span className={styles.dividerText}>OR</span>
      </div>

      <div className={styles.socialAuth}>
        <SocialLoginButton disabled={isLoading} onClick={() => {}} />
      </div>

      <div className={styles.signupPrompt}>
        <span className={styles.signupText}>Don't have an account? </span>
        <a href="#" className={styles.signupLink}>Create account</a>
      </div>
    </div>
  );
};
