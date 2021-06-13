import React, { useState } from "react";
import uuid from "uuid";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  // State
  // const [task, setTask] = useState(todo.task);

  const [task, setTask] = useState({
    id: uuid(), task: todo.task, completed: false, priority: 'normal', description: todo.description
  });
  // const { id, task, description, completed, priority } = todo;
  // func remove item
  const handleClick = evt => {
    remove(todo.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = evt => {
    evt.preventDefault();
    // update(todo.id, task); //fail here
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
          <input onChange={handleChange} value={todo.task} type="text" />
          <textarea
            value={todo.description}
            onChange={handleChange}
            type="text"
            name='description'
            placeholder='Enter description'
          />
          <select
            value={todo.priority}
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
            Detail <i className="fas fa-pen" />
          </button>
          <button className="Remove" onClick={handleClick}>
            Remove <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
