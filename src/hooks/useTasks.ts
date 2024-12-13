import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { updateTask, deleteTask, addTask, toggleTaskCompletion, setTasks, updateTaskTitle, updateTaskDate } from "../redux/features/tasksSlice";
import { useEffect } from "react";
import { tasksAPI } from '../api/tasks-api';

const useTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        const loadLocalTasks = () => {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                dispatch(setTasks(JSON.parse(savedTasks)));
            }
        };

        loadLocalTasks();
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const createTask = async (task) => {
        try {
            const response = await tasksAPI.createTasks(task.title);
            dispatch(addTask({ ...task, id: uuidv4(), isDone: false })); // Добавляем id и isDone
        } catch (error) {
            console.error('Ошибка при создании задачи:', error);
        }
    };

    const removeTask = async (id) => {
        try {
            await tasksAPI.deleteTasks(id);
            dispatch(deleteTask(id));
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
    };

    const toggleTaskStatus = (id, newStatus) => {
            dispatch(toggleTaskCompletion({ id, newStatus }));
        
    };
    const editTask = async (id, newTitle) => {
        try {
            const response = await tasksAPI.updateTask(id, newTitle);
            dispatch(updateTask({ id, title: newTitle }));
        } catch (error) {
            console.error('Ошибка при обновлении задачи:', error);
        }
    };

    const editTaskTitle = (id, newTitle) => {
        dispatch(updateTaskTitle({ id, newTitle }));
    };

    const editTaskDate = (id, newDate) => {
        dispatch(updateTaskDate({ id, newDate }));
    };

    return { tasks, createTask, editTask, removeTask, toggleTaskStatus, editTaskTitle, editTaskDate };
};

export default useTasks;
