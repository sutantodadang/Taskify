import React, { useState } from 'react';
import './App.css';
import CustomInput from './components/CustomInput';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <CustomInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
