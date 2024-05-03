import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TaskList from "./TasksList";
import AddTaskForm from "./AddTaskForm";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

function TasksManager() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [sortedTasks, setSortedTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTasks(data.todos);
        setSortedTasks(data.todos);
      });
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (taskId) => {
    const response = await axios.delete(
      `https://dummyjson.com/todos/${taskId}`
    );
    console.log(response);
    setTasks(tasks.filter((task) => task.id !== taskId));
    setEditingTask(null); // Reset editing task if it's being deleted
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const serachTodos = (serachValue) => {
    setSearchText(serachValue);
  };

  useEffect(() => {
    console.log("calling search");
    if (searchText) {
      const res = sortedTasks.filter((item) => {
        if (item.todo.toLowerCase().includes(searchText.toLowerCase())) {
          return item;
        }
      });
      setSearchResult(res);
    } else {
      setSearchResult(sortedTasks);
    }
  }, [sortedTasks, searchText]);

  const handleSortChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    // Sort tasks based on sortOrder criteria
    const sorted = [...tasks].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.todo.localeCompare(b.todo);
      } else if (sortOrder === "desc") {
        return b.todo.localeCompare(a.todo);
      }
    });
    setSortedTasks(sorted);
  }, [tasks, sortOrder]);

  return (
    <Container>
      <AddTaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
      />
      <Heading>Task List</Heading>
      <div>
        <label>Sort By Name:</label>
        <button onClick={handleSortChange}>Toggle Order</button>
      </div>
      <div>
        <input
          type="test"
          value={searchText}
          onChange={(e) => serachTodos(e.target.value)}
        />
      </div>
      <TaskList
        tasks={searchResult}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </Container>
  );
}

export default TasksManager;
