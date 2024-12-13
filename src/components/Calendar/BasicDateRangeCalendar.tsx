import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { toast, ToastContainer } from "react-toastify";
import dayjs from "dayjs";
import useTasks from "../../hooks/useTasks";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";
import { BackButton } from "../BackButton/BackButton";

interface Task {
  id: string;
  title: string;
  date: string;
  isDone: boolean;
}

export default function BasicDateRangeCalendar(props) {
  const tasks = useSelector((state) => state.tasks || []) as Task[];
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { createTask, removeTask, toggleTaskStatus, editTaskTitle } = useTasks();
  const [open, setOpen] = useState(false);
  const [taskIdToRemove, setTaskIdToRemove] = useState<string | null>(null);
  const [notificationTimes, setNotificationTimes] = useState<{[key: string]: string}>({});

  const addTask = useCallback(
    (title: string) => {
      if (title.trim()) {
        createTask({ title, date: selectedDate.format("YYYY-MM-DD") });
      }
    },
    [createTask, selectedDate]
  );

  const handleOpen = useCallback((id: string) => {
    setTaskIdToRemove(id);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setTaskIdToRemove(null);
  }, []);

  const handleRemoveTask = useCallback(() => {
    if (taskIdToRemove) {
      removeTask(taskIdToRemove);
    }
    handleClose();
  }, [removeTask, taskIdToRemove, handleClose]);

  const toggleCompletion = useCallback(
    (id: string, newStatus: boolean) => {
      toggleTaskStatus(id, newStatus);
    },
    [toggleTaskStatus]
  );

  const changeTaskTitle = useCallback(
    (id: string, newTitle: string) => {
      editTaskTitle(id, newTitle);
    },
    [editTaskTitle]
  );

  const handleTimeChange = (taskId: string, newTime: string | null) => {
    if (newTime) {
      setNotificationTimes((prev) => ({ ...prev, [taskId]: newTime }));
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BackButton iconColor={props.toggleStyle.iconColor} />
        <Box
          sx={{
            backgroundColor: props.toggleStyle.backgroundColor,
            padding: 3,
            borderRadius: 2,
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            boxShadow: 3,
          }}
        >
          <DateCalendar
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            sx={{
              width: '100%',
              height: '400px',
              borderRadius: 2,
              '& .MuiPickersDay-root.Mui-selected': {
                backgroundColor: 'var(--orange-color)',
                color: 'white', // Цвет текста для выделенного дня
              },
              '& .MuiPickersDay-root.Mui-selected:hover': {
                backgroundColor: 'rgb(176, 92, 31)',
              },
              '& .MuiPickersDay-root.Mui-selected:focus': {
                backgroundColor: 'rgb(176, 92, 31)',
              },
              '& .MuiPickersYear-yearButton.Mui-selected': {
                backgroundColor: 'rgb(176, 92, 31)',
                color: 'white', // Цвет текста для выделенной кнопки года
              },
              '& .MuiPickersYear-yearButton.Mui-selected:hover': {
                backgroundColor: 'rgb(176, 92, 31)'
              },
              '& .MuiPickersYear-yearButton.Mui-selected:focus': {
                backgroundColor: 'rgb(176, 92, 31)'
              },
              '& .MuiButtonBase-root': {
                backgroundColor: props.toggleStyle.backgroundColor, // Установите фон для кнопок
              },
              '& .MuiIconButton-root': {
                margin: '0 4px', // Увеличьте отступ между значками
              },
              color: 'black',
            }}
          />
        </Box>
      </LocalizationProvider>

      <Box sx={{ marginTop: 4, padding: 2, backgroundColor: props.toggleStyle.backgroundColor, borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2, textAlign: "center", color: props.toggleStyle.textColor }}>
          Добавить задачу
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TaskInput
            addTask={addTask}
            toggleStyle={props.toggleStyle.iconColor}
          />
        </Box>
        <TaskList
          tasks={tasks.filter(
            (task) => task.date === selectedDate.format("YYYY-MM-DD")
          )}
          toggleCompletion={toggleCompletion}
          color={props.toggleStyle.textColor}
          changeTaskTitle={changeTaskTitle}
          handleOpen={handleOpen}
          handleTimeChange={handleTimeChange}
          selectedDate={selectedDate}
          notificationTimes={notificationTimes}
        />
      </Box>

      <ConfirmationDialog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleRemoveTask}
        itemType="task"
      />
      <ToastContainer />
    </>
  );
}

