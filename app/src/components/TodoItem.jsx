import React, { useState } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(todo.text);
    }
  };

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          className={styles.editInput}
          autoFocus
        />
      ) : (
        <span className={styles.text} onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}
      
      <div className={styles.actions}>
        <button
          onClick={() => setIsEditing(true)}
          className={styles.editButton}
          aria-label="Редактировать"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className={styles.deleteButton}
          aria-label="Удалить"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default TodoItem;