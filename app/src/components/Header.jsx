 import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';

const Header = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  // Фокус на input при загрузке
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>todo</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Что нужно сделать?"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default Header;