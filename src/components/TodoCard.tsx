import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import './style.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((val) =>
        val.id === id ? { ...val, isDone: !val.isDone } : val
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((val) => val.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((val) => (val.id === id ? { ...val, todo: editTodo } : val))
    );

    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todo-card" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => seteditTodo(e.target.value)}
          className="todo-edit"
        />
      ) : todo.isDone ? (
        <s className="todos-text">{todo.todo}</s>
      ) : (
        <span className="todos-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
