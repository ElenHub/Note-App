import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { NoteType } from '../../types/type';

export interface NotesState {
    notes: NoteType[];
}

const initialState: NotesState = {
    notes: [],
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: {
            reducer: (state, action: PayloadAction<NoteType>) => {
                state.notes.push(action.payload);
            },
            prepare: ({id, title, details, color, fontColor, date }: Omit<NoteType , 'id'>) => {
                return {
                    payload: {
                        id,
                        title,
                        details,
                        date,
                        color,
                        fontColor,
                    },
                };
            },
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload); 
        },
        updateNote: (state, action: PayloadAction<NoteType>) => {
            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
                state.notes[index] = { ...state.notes[index], ...action.payload };
            }
        },
        setNotes: (state, action: PayloadAction<NoteType[]>) => {
            state.notes = Array.isArray(action.payload) ? action.payload : []; // Убедитесь, что это массив
        },
    },
});

// Экспортируем действия
export const { addNote, deleteNote, updateNote, setNotes } = notesSlice.actions;

// Экспортируем редюсер по умолчанию
export default notesSlice.reducer;