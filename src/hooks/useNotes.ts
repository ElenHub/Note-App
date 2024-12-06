import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes, addNote, updateNote, deleteNote } from '../redux/features/notesSlice';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../types/type';

const useNotes = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state: RootState)  => state.notes.notes);

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            const parsedNotes = JSON.parse(savedNotes);
            if (Array.isArray(parsedNotes)) {
                dispatch(setNotes(parsedNotes)); // Устанавливаем документы сразу
            }
        }
    }, [dispatch]);

    useEffect(() => {
        if (Array.isArray(notes)) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    const createNote = (note: { title: string; details: string; color: string; fontColor: string; }) => {
        const newNote = { ...note, id: uuidv4() }; // Генерация нового id
        dispatch(addNote(newNote));
    };

    const editNote = (id: string, title: string, details: string, color: string, fontColor: string) => {
        const updatedNote = { id, title, details, color, fontColor };
        dispatch(updateNote(updatedNote));
    };

    const removeNote = (id: string) => {
        dispatch(deleteNote(id));
    };

    return { notes, createNote, editNote, removeNote };
};

export default useNotes;


