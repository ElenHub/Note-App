import React, { useEffect } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { Delete } from "@mui/icons-material"; 
import EditableSpan from "../EditableSpan/EditableSpan";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./TaskList.module.css";

const TaskList = React.memo((props) => {
  const getTaskTitleById = (id) => {
    // Function to get the task title by ID
    const task = props.tasks.find((task) => task.id === id);
    return task ? task.title : "Unknown task";
    };
      
  // Effect for notifying about task times
    useEffect(() => {
    const notifyTasks = () => {
            const now = dayjs();
            Object.keys(props.notificationTimes).forEach((taskId) => {
                const chosenTime = dayjs(props.notificationTimes[taskId]);

        // Check if the current time matches the notification time
                if (now.isSame(chosenTime, "minute")) {
                    const taskTitle = getTaskTitleById(taskId);
          toast.success(
            `The time has come! Notification for a task: ${taskTitle}`,
            {
                        autoClose: 5000,
            }
          );
                }
            });
    };
      
    const interval = setInterval(notifyTasks, 60000); //Check every minute
    return () => clearInterval(interval); // Cleanup on unmount
    }, [props.notificationTimes, props.tasks]);

  // If no tasks are available, display a message
  if (!props.tasks || props.tasks.length === 0) {
    return (
      <Typography
        color={props.color}
        variant="body1"
        align="center"
        sx={{ margin: 2 }}
      >
        No tasks available
      </Typography>
    );
  }

  return (
    <Box sx={{ marginTop: 2 }}>
            <ToastContainer />
      <Typography
        color={props.color}
        variant="h6"
        align="center"
        sx={{ marginBottom: 2 }}
      >
        Your tasks
                </Typography>
      {props.tasks.map((task) => (
        <Box
          className={`${task.isDone ? style.isDone : style.task}`}
          key={task.id}
          sx={{ display: "flex", alignItems: "center", gap: 1, padding: 1 }}
        >
                        <Checkbox
                            checked={task.isDone}
            onChange={(event) =>
              props.toggleCompletion(task.id, event.target.checked)
            }
                            sx={{
                                "&.Mui-checked": {
                                    color: "var(--orange-color)",
                                },
                            }}
                        />
                        <EditableSpan
                            title={task.title}
                            onChange={(newTitle) => props.changeTaskTitle(task.id, newTitle)}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker 
                                label="Уведомление"
              value={
                props.notificationTimes[task.id]
                  ? dayjs(props.notificationTimes[task.id])
                  : dayjs()
              }
              onChange={(newValue) =>
                props.handleTimeChange(
                  task.id,
                  newValue ? newValue.format() : null
                )
              }
                                renderInput={(params) => <TextField {...params} />}
                                disabled={task.isDone} 
              sx={{ marginLeft: "auto" }}
                            />
                        </LocalizationProvider>
                        <IconButton 
                            onClick={() => props.handleOpen(task.id)} 
                            color="error" 
                            sx={{
              backgroundColor: "transparent",
              marginLeft: 4,
                                marginRight: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.1)",
                borderRadius: "50%",
                                },
              transition: "background-color 0.3s ease",
                            }}
                        >
                            <Delete />
                        </IconButton>
                    </Box>
      ))}
        </Box>
    );
});

export default TaskList;
