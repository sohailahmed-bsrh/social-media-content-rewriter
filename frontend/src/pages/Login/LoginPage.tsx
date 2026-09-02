import React from 'react';
import { LoginBrandPanel } from './LoginBrandPanel';
import { LoginForm } from './LoginForm';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.splitLayout}>
        <div className={styles.leftPanel}>
          <LoginBrandPanel />
        </div>
        <div className={styles.rightPanel}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
