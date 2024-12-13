import { useEffect, useState } from "react";
import { notesAPI } from "../api/notes-api"; // Импортируйте ваш notesAPI
import useNotes from "./useNotes";
import { useDispatch } from 'react-redux';
import { setNotes } from '../redux/features/notesSlice';

const useLoadNotes = () => {
    const { notes } = useNotes(); // Получаем заметки из useNotes
    const [loading, setLoading] = useState(true); // Добавляем состояние загрузки
    const dispatch = useDispatch(); // Получаем dispatch

    useEffect(() => {
        const loadNotes = async () => {
            const savedNotes = localStorage.getItem('notes');
            if (savedNotes) {
                dispatch(setNotes(JSON.parse(savedNotes))); // Используем dispatch для обновления состояния
            } else {
                try {
                    const response = await notesAPI.getNotes();
                    dispatch(setNotes(response.data)); // Используем dispatch для обновления состояния
                    localStorage.setItem('notes', JSON.stringify(response.data)); // Сохраняем загрузку в локальное хранилище
                } catch (error) {
                    console.error('Ошибка при загрузке заметок:', error);
                }
            }
            setLoading(false); // Устанавливаем состояние загрузки в false после завершения загрузки
        };

        loadNotes();
    }, [dispatch]);

    return { loading, notes }; // Возвращаем loading и notes
};

export default useLoadNotes;
