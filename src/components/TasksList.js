import React, { useEffect, useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TaskTitle = styled.span`
  font-weight: bold;
`;

const TaskDescription = styled.span`
  color: #666;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
`;

const TaskList = ({ tasks, deleteTask, editTask }) => {
  console.log("tasks", tasks);
  return (
    <div>
      {tasks.length ? (
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <div>
                {/* <TaskTitle>{task.completed}</TaskTitle> */}
                <TaskDescription>{task.todo}</TaskDescription>
              </div>
              <Actions>
                <Button onClick={() => editTask(task)}>Edit</Button>
                <Button onClick={() => deleteTask(task.id)}>Delete</Button>
              </Actions>
            </ListItem>
          ))}
        </List>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
