import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes, addNote, updateNote, deleteNote } from '../redux/features/notesSlice';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../types/type';
import axios from 'axios'; 
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

    const createNote =  async(note: { title: string, details: string, color: string, fontColor: string, category:string }) => {
        try {
            const response = await notesAPI.createNotes(note.title, note.details,  note.color,  note.fontColor, note.category );
            dispatch(addNote(response.data)); 
            const updatedNotes = [...notes, response.data];
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        } catch (error) {
            console.error('Ошибка при создании заметки:', error);
        }
    };

    const removeNote = async (id: string) => {
        try {
            await notesAPI.deleteNotes(id);
            dispatch(deleteNote(id));
            localStorage.setItem('notes', JSON.stringify(notes.filter(note => note.id !== id)));
        } catch (error) {
            console.error('Ошибка при удалении заметки:', error);
        }
    };
    const editNote = async (id: string, title: string, details: string, color:string, fontColor:string, category:string ) => {
        const noteData = { id, title, details, color, fontColor, category };
        try {
            const response = await notesAPI.updateNotes(id, title, details, color, fontColor, category);
            dispatch(updateNote(noteData));
            const updatedNotes = notes.map(note => note.id === id ? noteData : note);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        } catch (error) {
            console.error('Ошибка при обновлении заметки:', error);
        }
    };

    return { notes, createNote, editNote, removeNote };
};

export default useNotes;



