import React, { useState, useEffect } from "react";
// import queryString from 'query-string';
import PostFiltersForm from "./components/PostFiltersForm";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid";
// import { Input } from 'antd';
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      task: "task 1",
      completed: false,
      description: "description1",
      priority: "normal"
    },
    {
      id: uuid(),
      task: "task 2",
      completed: true,
      description: "description2",
      priority: "high"
    },
    {
      id: uuid(),
      task: "task 3",
      completed: true,
      description: "description3",
      priority: "low"
    },
  ]);

  const create = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    // console.log(todos);
    // console.log("Id");
    // console.log(id);
    const tds = todos.filter((todo) => todo.id !== id);
    // console.log(tds);
    setTodos(tds);
  };

  const update = (id, updtedTask) => {
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updtedTask };
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

  const  handleFiltersChange = (newFilters) => {
    console.log("New filters: " + newFilters);
    if (newFilters.length > 0) {
      const tds = todos.filter(item => {
        // console.log(item.task);
        return item.task.toLowerCase().match(newFilters);
        // if (item.task.toLowerCase().indexOf(newFilters,toLowerCase()) === -1) return; //
      });
      console.log(tds);
      setTodos(tds);
    }

  }

  const todosList = todos.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
      handleFiltersChange={handleFiltersChange}
    />
  ));



  return (
    <div>
      <div className="TodoList">
        <NewTodoForm createTodo={create} />
        <PostFiltersForm onSubmit={handleFiltersChange} />
        {todosList}
      </div>
    </div>
  );
}

export default TodoList;