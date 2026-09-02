import React from 'react';
import { LoginBrandPanel } from './LoginBrandPanel';
import { LoginForm } from './LoginForm';
import styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.splitLayout}>
        <div className={styles.leftPanel}>
          <LoginBrandPanel />
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.authWrapper}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
