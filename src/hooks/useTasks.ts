import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { updateTask, deleteTask, addTask, toggleTaskCompletion, setTasks, updateTaskTitle } from "../redux/features/tasksSlice";
import { useEffect } from "react";

const useTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            try {
                const parsedTasks = JSON.parse(savedTasks);
                if (Array.isArray(parsedTasks)) {
                    dispatch(setTasks(parsedTasks));
                } else {
                    console.warn('Saved tasks are not an array:', parsedTasks);
                }
            } catch (error) {
                console.error('Error parsing saved tasks from localStorage:', error);
                localStorage.removeItem('tasks');
            }
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const createTask = (task) => {
        const newTask = { ...task, id: uuidv4(), isDone: false };
        dispatch(addTask(newTask));
    };

    const editTask = (id:string, title:string) => {
        const taskToUpdate = tasks.find(task => task.id === id);
        if (taskToUpdate) {
            const updatedTask = { ...taskToUpdate, title };
            dispatch(updateTask(updatedTask));
        }
    };

    const removeTask = (id:string) => {
        dispatch(deleteTask(id));
    };

    const toggleTaskStatus = (id:string) => {
        dispatch(toggleTaskCompletion(id));
    };

    const editTaskTitle = (id:string, newTitle:string) => {
        dispatch(updateTaskTitle({ id, newTitle }));
    };

    return { tasks, createTask, editTask, removeTask, toggleTaskStatus, editTaskTitle };
};

export default useTasks;