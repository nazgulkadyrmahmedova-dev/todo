import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' },
  ];

  return (
    <div className={styles.filter}>
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`${styles.filterButton} ${
            currentFilter === filter.value ? styles.active : ''
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;