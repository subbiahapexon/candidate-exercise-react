import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { List, ListItem, TaskDescription, Actions } from "./TasksListStyle";

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
                <IconButton
                  aria-label="delete"
                  size="large"
                  color="error"
                  onClick={() => deleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="large"
                  color="info"
                  onClick={() => editTask(task)}
                >
                  <EditIcon />
                </IconButton>
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
