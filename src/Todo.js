import React, { useEffect, useState } from "react";
import uuid from "uuid";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  // State

  const [task, setTask] = useState({
    // id: uuid(), task: todo.task, completed: false, priority: 'normal', description: todo.description
  });

  useEffect(() => {
    setTask(todo);
  }, [todo]);

  // const { id, task, description, completed, priority } = todo;
  // func remove item
  const handleClick = (evt) => {
    remove(todo.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (evt) => {
    // evt.preventDefault();
    update(todo.id, task); //fail here
    // toggleFrom();
    setIsEditing(!isEditing);
  };

  const handleChange = (evt) => {
    setTask({ ...task, [evt.target.name]: evt.target.value });
  };

  const toggleCompleted = (evt) => {
    toggleComplete(evt.target.id);
  };



  return !isEditing ? (
    <div className="Todo">
      <div
        // id={task.id}
        onClick={toggleCompleted}
        className={task.completed ? "Todo-task completed" : "Todo-task"}
      >
        {task.task}
      </div>
      <div className="Todo-buttons">
        <button className="Detail" onClick={toggleFrom}>
          Detail <i className="fas fa-pen" />
        </button>
        <button className="Remove" onClick={handleClick}>
          Remove <i className="fas fa-trash" />
        </button>
      </div>
    </div>
  ) : (
    <div className="Todo">
      <form className="Todo-edit-form" onSubmit={handleUpdate}>
        <input
          name="task"
          onChange={handleChange}
          value={task.task}
          type="text"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Enter description"
        />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
        <button>Update</button>
      </form>
    </div>
  );
}

export default Todo;