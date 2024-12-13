import { useEffect, useState } from "react";
import { tasksAPI } from "../api/tasks-api"; // Импортируйте ваш notesAPI
import useTasks from "./useTasks";
import { useDispatch } from 'react-redux';
import { setTasks } from '../redux/features/tasksSlice';

const useLoadTasks = () => {
    const { tasks } = useTasks(); // Получаем заметки из useNotes
    const [loading, setLoading] = useState(true); // Добавляем состояние загрузки
    const dispatch = useDispatch(); // Получаем dispatch

    useEffect(() => {
        const loadTasks = async () => {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                dispatch(setTasks(JSON.parse(savedTasks))); // Используем dispatch для обновления состояния
            } else {
                try {
                    const response = await tasksAPI.getTasks();
                    dispatch(setTasks(response.data)); // Используем dispatch для обновления состояния
                    localStorage.setItem('tasks', JSON.stringify(response.data)); // Сохраняем загрузку в локальное хранилище
                } catch (error) {
                    console.error('Ошибка при загрузке заметок:', error);
                }
            }
            setLoading(false); // Устанавливаем состояние загрузки в false после завершения загрузки
        };

        loadTasks();
    }, [dispatch]);

    return { loading, tasks }; // Возвращаем loading и Tasks
};

export default useLoadTasks;
