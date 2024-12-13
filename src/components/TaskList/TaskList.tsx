import React, { useEffect } from 'react';
import { Box, Checkbox, IconButton, Typography, TextField } from "@mui/material";
import { Delete } from "@mui/icons-material"; 
import EditableSpan from "../EditableSpan/EditableSpan";
import { TimePicker } from '@mui/x-date-pickers/TimePicker'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import style from "./TaskList.module.css";

const TaskList = (props) => {
    const getTaskTitleById = (id: string) => {
        const task = props.tasks.find(task => task.id === id);
        return task ? task.title : "Неизвестная задача";
    };
      
    // Уведомление по времени
    useEffect(() => {
        const interval = setInterval(() => {
            const now = dayjs();
            Object.keys(props.notificationTimes).forEach((taskId) => {
                const chosenTime = dayjs(props.notificationTimes[taskId]);

                if (now.isSame(chosenTime, "minute")) {
                    const taskTitle = getTaskTitleById(taskId);
                    toast.success(`Время пришло! Уведомление для задачи: ${taskTitle}`, {
                        autoClose: 5000,
                    });
                }
            });
        }, 60000); // Проверяем каждую минуту
      
        return () => clearInterval(interval);
    }, [props.notificationTimes, props.tasks]);

    return (
        <Box sx={{ marginTop: 2}}>
            <ToastContainer />
            {props.tasks.length === 0 ? (
                <Typography color={props.color} variant="body1" align="center" sx={{ margin: 2 }}>
                    Нет задач
                </Typography>
            ) : (
                props.tasks.map((task) => (
                    <Box className={`${task.isDone ? style.isDone : style.task}`} key={task.id} sx={{ display: "flex", alignItems: "center", gap: 1, padding: 1 }}>
                        <Checkbox
                            checked={task.isDone}
                            onChange={(event) => props.toggleCompletion(task.id, event.target.checked)}
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
                                value={props.notificationTimes[task.id] ? dayjs(props.notificationTimes[task.id]) : dayjs()}
                                onChange={(newValue) => props.handleTimeChange(task.id, newValue ? newValue.format() : null)}
                                renderInput={(params) => <TextField {...params} />}
                                disabled={task.isDone} 
                                sx={{ marginLeft: 'auto' }} 
                            />
                        </LocalizationProvider>
                        <IconButton 
                            onClick={() => props.handleOpen(task.id)} 
                            color="error" 
                            sx={{
                                backgroundColor: 'transparent',
                                marginLeft: 4, // Добавлен отступ слева от кнопки
                                marginRight: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 0, 0, 0.1)', // Легкий красный фон при наведении
                                    borderRadius: '50%',
                                },
                                transition: 'background-color 0.3s ease',
                            }}
                        >
                            <Delete />
                        </IconButton>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default TaskList;
