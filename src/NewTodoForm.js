import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
// import styles from './index.module.scss'
// import "./newTodoForm.css";
import DateTimeInput from './components/DateTimeInput/DateTimeInput';

function NewTodoForm({ task, createTodo }) {
  const [date, setDate] = useState(null);
  const handleDateChange = (newDate, isUserChange) => {
    if (isUserChange) setDate(newDate)
  }
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { task: "" }
    // , { description: "" }, { priority: null }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { id: uuid(), task: userInput.task, completed: false, date };
    createTodo(newTodo);
    setUserInput({ task: "" }, { description: "" }, { priority: null });
  };

  const canSave = date && userInput.description && userInput.task;
  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="TitlePanel">To Do List</div>
      <div className="NewInputTask">
        <label htmlFor="task">New Task</label>
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
          name='description'
          onChange={handleChange}
          placeholder='Enter description'
        />
      </div>

      <div className="NewRest">
        <div>
          <label htmlFor="priority">Due Date</label>
          <DateTimeInput 
          large
          minimal
          fill
          // className={styles.saveButton}
          date = {date}
          onSelect={handleDateChange}
          isAllDay={userInput.isAllDay}
          />

        </div>

        <div>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={userInput.priority}
            onChange={handleChange}
          >
            <option value='low'>Low</option>
            <option value='normal'>Normal</option>
            <option value='high'>High</option>
          </select>
        </div>


      </div>


      <button
      large
      minimal
      fill
      disabled={!canSave}
      >Add Task</button>

    </form>
  );
}

export default NewTodoForm;
