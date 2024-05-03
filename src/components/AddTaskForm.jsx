// AddTaskForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function AddTaskForm({ addTask, editingTask, updateTask }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setDescription(editingTask.todo);
    } else {
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    if (editingTask) {
      const response = await axios.put(
        `https://dummyjson.com/todos/${editingTask.id}`,
        {
          todo: description,
        }
      );
      console.log(response.data);
      updateTask(response.data);
    } else {
      const response = await axios.post("https://dummyjson.com/todos/add", {
        todo: description,
        completed: false,
        userId: 5,
      });
      addTask(response.data);
    }

    setDescription("");
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">
          {editingTask ? "Update Task" : "Add Task"}
        </Button>
      </Form>
    </FormContainer>
  );
}

export default AddTaskForm;
