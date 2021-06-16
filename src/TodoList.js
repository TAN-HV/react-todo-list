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

  const filterItems = (query) => {
    console.log('--------------query----------');
    console.log(query);
    const tds = todos.filter(todo => todo.task === query);
    console.log(tds);
    setTodos(tds);
  }

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

  const todosList = todos.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  // lấy data
  // useEffect(() => {
  //   async function fetchPostList() {
  //     // ...
  //     try {
  //       // _limit=10&_page=1
  //       const paramsString = queryString.stringify(filters);
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       console.log({ responseJSON });

  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log('Failed to fetch post list: ', error.message);
  //     }
  //   }

  //   console.log('POST list effect');
  //   fetchPostList();
  // }, [filters]);

  function handleFiltersChange(newFilters) {
    console.log("New filters: ", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

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