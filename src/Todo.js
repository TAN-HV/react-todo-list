import React, { useState } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
// import PostFiltersForm from "./components/PostFiltersForm/index.js";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  // State
  const [task, setTask] = useState({
    id: uuid(), task: todo.task, completed: false, priority: 'normal', description: todo.description
  });
  // const { task, description, completed, priority } = task;
  //remove item
  const handleClick = evt => {
    remove(evt.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = evt => {
    evt.preventDefault();
    // update(todo.id, task);
    toggleFrom();
  };
  const handleChange = evt => {
    setTask(evt.target.value);
  };
  const toggleCompleted = evt => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task.task} type="text" />
          <textarea
            value={task.description}
            type="text"
            name='description'
            placeholder='Enter description'
          />
          <select
            value={task.priority}
            onChange={handleChange}
          >
            <option value='low'>Low</option>
            <option value='normal'>Normal</option>
            <option value='high'>High</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}

        </li>
        <div className="Todo-buttons">
          <button className="Detail" onClick={toggleFrom}>
            Detail     <i className="fas fa-pen" />
          </button>
          <button className="Remove" onClick={handleClick}>
            Remove      <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
