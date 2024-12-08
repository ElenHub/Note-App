import  React, { useCallback } from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { Checkbox, TextField, IconButton, Box, Typography, CircularProgress } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import style from './BasicDateRangeCalendar.module.css';
import EditableSpan from '../EditableSpan/EditableSpan';
import dayjs from 'dayjs';
import {useSelector } from 'react-redux';
import useTasks from '../../hooks/useTasks';
import { ToggleStyleType } from '../../types/type';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import { BackButton } from '../BackButton/BackButton';
import useLoadNotes from '../../hooks/useLoadNotes';

  interface Task {
    id: string
    title: string
    date: string
    isDone: boolean
}

export default function BasicDateRangeCalendar(props:ToggleStyleType) {
    const tasks=useSelector(state=>state.tasks || []) as Task[];
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const {createTask, removeTask, toggleTaskStatus, editTaskTitle}=useTasks()
    const [open, setOpen] = useState(false);
    const [taskIdToRemove, setTaskIdToRemove] =  useState<string | null>(null);
    const loading = useLoadNotes(); 
    const addTask = useCallback((title: string) => {
        if (title.trim()) { 
            createTask({ title, date: selectedDate.format('YYYY-MM-DD') }); // Добавить дату задачи
        }
    }, [createTask, selectedDate])

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

    const toggleCompletion = useCallback((id: string) => {
        toggleTaskStatus(id);
    }, [toggleTaskStatus]);


    const changeTaskTitle = useCallback((id: string, newTitle: string) => {
        editTaskTitle(id, newTitle);
    }, [editTaskTitle]);

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
               <BackButton iconColor={props.toggleStyle.iconColor}/>
                <Box sx={{
                    backgroundColor: props.toggleStyle.backgroundColor,
                    padding: 2,
                    borderRadius: 14,
                    width: '100%',
                    maxWidth: '800px',
                    margin: '0 auto',
                    boxShadow: 3 // Добавляем тень
                    // MuiBox-root
                }}>
                    <DateCalendar 
                        value={selectedDate} 
                        onChange={(newValue) => setSelectedDate(newValue)} 
                        sx={{
                            width: '100%',
                            height: '600px',
                            '& .MuiPickersDay-root.Mui-selected': {
                                backgroundColor: 'var(--orange-color)',
                            },
                            '& .MuiPickersDay-root.Mui-selected:hover': {
                                backgroundColor: 'rgb(176, 92, 31)',
                            },
                            '& .MuiPickersDay-root.Mui-selected:focus': {
                                backgroundColor: 'rgb(176, 92, 31)',
                            },
                            '& .MuiPickersYear-yearButton.Mui-selected ': {
                                backgroundColor: 'rgb(176, 92, 31)',
                            },

                                color: 'black',  
                        }} 
                    />
                </Box>
            </LocalizationProvider>
            <Box sx={{ marginTop: 2 }}>
                <Typography variant="h6" sx={{ marginBottom:'20px' }}>Добавить задачу</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TaskInput addTask={addTask} toggleStyle={props.toggleStyle.iconColor}/>
                </Box>
                {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <CircularProgress color='warning'/>
        </Box>
      ) : <TaskList tasks={tasks.filter(task => task.date === selectedDate.format('YYYY-MM-DD'))} toggleCompletion={toggleCompletion} color={props.toggleStyle.textColor} changeTaskTitle={changeTaskTitle} handleOpen={handleOpen} />}
            </Box>
         <ConfirmationDialog open={open}
                handleClose={handleClose}
                handleConfirm={handleRemoveTask}
                itemType="task"/>
        </>
    );
}












