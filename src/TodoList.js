import React, { useState } from "react";
import ReactDOM from "react-dom";
import PostFiltersForm from "./components/PostFiltersForm/index.js";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([

    { id: uuid(), task: "task 1", completed: false, description: 'description1' },
    { id: uuid(), task: "task 2", completed: true, description: 'description2' },
    { id: uuid(), task: "task 3", completed: true, description: 'description3' }
  ]);

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div>
      <div className="TodoList">
        <NewTodoForm createTodo={create} />
        <PostFiltersForm />
        <ul>{todosList}</ul>
      </div>
    </div>

  );
}

export default TodoList;
