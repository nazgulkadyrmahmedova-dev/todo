import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>📝</div>
        <p className={styles.emptyText}>Нет задач</p>
        <p className={styles.emptySubtext}>Добавьте свою первую задачу</p>
      </div>
    );
  }

  return (
    <div className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;