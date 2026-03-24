import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Footer from './components/Footer';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Загрузка задач из localStorage при монтировании
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Сохранение задач в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Добавление новой задачи
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Удаление задачи
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Переключение статуса выполнения
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Редактирование текста задачи
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Очистка выполненных задач
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Фильтрация задач
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Подсчет оставшихся задач
  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header onAdd={addTodo} />
        
        {todos.length > 0 && (
          <Filter currentFilter={filter} onFilterChange={setFilter} />
        )}
        
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        
        {todos.length > 0 && (
          <Footer
            remainingCount={remainingCount}
            hasCompleted={todos.some(todo => todo.completed)}
            onClearCompleted={clearCompleted}
          />
        )}
      </div>
    </div>
  );
};

export default App;