import React, { useState } from "react";
import uuid from "uuid";
function App() {
    const [tasks, setTasks] = useState([
        { id: uuid(), title: "task 1", description: 'description1', completed: false },
        { id: uuid(), title: "task 2", description: 'description2', completed: true },
        { id: uuid(), title: "task 3", description: 'description3', completed: true }
    ]);

    const createTask = (newTask) => {

    }

    const removeTask = () => {
        console.log("removeTask");
    }

    const updateTask = () => {
        console.log("updateTask");
    }

    const getTasks = () => {
        console.log("getTask");
    }

    const getTaskFromLocalStore = () => {
        console.log("getTask");
    }

    const listTasks = tasks.map(task => (
        <Task task={task} />
    ))
    return (
        <div>
            <div className="TodoList">
                <ul>{listTasks}</ul>
            </div>
        </div>
    );
}