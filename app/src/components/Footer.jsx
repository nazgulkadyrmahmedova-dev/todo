import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ remainingCount, hasCompleted, onClearCompleted }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <span className={styles.count}>{remainingCount}</span>
        <span>{remainingCount === 1 ? 'задача' : 'задач'}</span>
      </div>
      
      {hasCompleted && (
        <button onClick={onClearCompleted} className={styles.clearButton}>
          Очистить выполненные
        </button>
      )}
    </div>
  );
};

export default Footer;