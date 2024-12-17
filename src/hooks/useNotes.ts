import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes, addNote, updateNote, deleteNote } from '../redux/features/notesSlice';
import { RootState } from '../types/type';
import { notesAPI } from '../api/notes-api';

const useNotes = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => state.notes.notes);

    useEffect(() => {
        const loadLocalNotes = () => {
            const savedNotes = localStorage.getItem('notes');
            if (savedNotes) {
                dispatch(setNotes(JSON.parse(savedNotes)));
            }
        };
        loadLocalNotes();
    }, [dispatch]);

    const createNote = async (note) => {
        try {
            const response = await notesAPI.createNotes(note.title, note.details, note.color, note.fontColor, note.category);
            dispatch(addNote(response.data));
            localStorage.setItem('notes', JSON.stringify([...notes, response.data]));
        } catch (error) {
            console.error('Ошибка при создании заметки:', error);
        }
    };

    const removeNote = async (id) => {
        try {
            await notesAPI.deleteNotes(id);
            dispatch(deleteNote(id));
            localStorage.setItem('notes', JSON.stringify(notes.filter(note => note.id !== id)));
        } catch (error) {
            console.error('Ошибка при удалении заметки:', error);
        }
    };

    const updateNoteAsync = async (noteData) => {
        try {
            const response = await notesAPI.updateNotes(noteData.id, noteData.title, noteData.details, noteData.color, noteData.fontColor, noteData.category);
            dispatch(updateNote(response.data));
            localStorage.setItem('notes', JSON.stringify(notes.map(note => note.id === noteData.id ? response.data : note)));
        } catch (error) {
            console.error('Ошибка при обновлении заметки:', error);
        }
    };

    return { notes, createNote, updateNoteAsync, removeNote };
};

export default useNotes;
