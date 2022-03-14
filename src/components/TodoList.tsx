import React from 'react';
import { Todo } from '../model';
import './style.css';
import TodoCard from './TodoCard';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((value) => (
        <TodoCard
          todo={value}
          key={value.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
