import React, { useState, useReducer } from "react";
import uuid from "uuid";
import "./newTodoForm.css";

function NewTodoForm({ task, createTodo }) {
  // const [task, setStask] = useState("");
  // const [title, setTitle] = useState('')
  // replace for useState
  const [userInput, setUserInput] = useReducer(
    // coppy state old
    (state, newState) => ({ ...state, ...newState }),
    // Init default
    { task: "", description: "" }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
    const changeTodo = {
      id: uuid(),
      task: userInput.task,
      description: userInput.description,
      completed: false,
      priority: userInput.priority,
    };
    setUserInput({ priority: userInput.priority },)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = {
      id: uuid(),
      task: userInput.task,
      description: userInput.description,
      completed: false,
      priority: userInput.priority,
    };
    createTodo(newTodo);
    setUserInput({ task: "", description: "", priority: "normal" });

  };

  const canSave = userInput.description && userInput.task;
  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="TitlePanel">New Task</div>
      <div className="NewInputTask">
        <input
          value={userInput.task}
          onChange={handleChange}
          id="task"
          type="text"
          name="task"
          placeholder="Add new task..."
        />
      </div>
      <div className="NewDescription">
        <label htmlFor="description">Description</label>
        <textarea
          value={userInput.description}
          id="description"
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Enter description"
        />
      </div>

      <div>
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={userInput.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
        <button disabled={!canSave}>Add Task</button>
      </div>
    </form>
  );
}

export default NewTodoForm;
