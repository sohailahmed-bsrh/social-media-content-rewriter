import React, { useState, useEffect } from 'react';
import styles from './LoadingExperience.module.css';

interface LoadingExperienceProps {
  platform: 'x' | 'linkedin' | 'email' | 'newsletter';
}

const MESSAGES = {
  linkedin: [
    'Understanding your content...',
    'Finding the strongest insights...',
    'Building your LinkedIn hook...',
    'Structuring your professional post...',
    'Finalizing your content...'
  ],
  x: [
    'Analyzing key ideas...',
    'Finding thread-worthy insights...',
    'Creating your opening hook...',
    'Building your X thread...',
    'Finalizing your posts...'
  ],
  email: [
    'Understanding your content...',
    'Finding the main story...',
    'Writing your subject line...',
    'Structuring your newsletter...',
    'Finalizing your content...'
  ],
  newsletter: [
    'Understanding your content...',
    'Finding the main story...',
    'Writing your subject line...',
    'Structuring your newsletter...',
    'Finalizing your content...'
  ]
};

export const LoadingExperience: React.FC<LoadingExperienceProps> = ({ platform }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const platformMessages = MESSAGES[platform] || MESSAGES.linkedin;

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % platformMessages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, [platformMessages.length]);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <div className={styles.messageWrapper}>
        <p key={messageIndex} className={styles.message}>
          {platformMessages[messageIndex]}
        </p>
      </div>
    </div>
  );
};
