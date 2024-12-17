import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { notesAPI } from '../../api/notes-api';
import { NoteType } from '../../types/type';

export interface NotesState {
    notes: NoteType[];
    loading: boolean;
    error?: string;
}

// Начальное состояние
const initialState: NotesState = {
    notes: [],
    loading: false,
};

// Асинхронные действия
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
    const response = await notesAPI.getNotes();
    return response.data;
});

// Создание слайса
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<NoteType>) => {
            state.notes.push(action.payload);
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        setNotes: (state, action: PayloadAction<NoteType[]>) => {
            state.notes = Array.isArray(action.payload) ? action.payload : [];
        },
        updateNote: (state, action: PayloadAction<NoteType>) => {
            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
                state.notes[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addNote, deleteNote, setNotes, updateNote } = notesSlice.actions;

export default notesSlice.reducer;

