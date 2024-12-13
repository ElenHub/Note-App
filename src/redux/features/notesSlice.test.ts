import { configureStore } from '@reduxjs/toolkit';
import notesReducer, { addNote, deleteNote, updateNote, setNotes, NotesState } from './notesSlice';
import { NoteType } from '../../types/type';

describe('notesSlice', () => {
    let store: any;

    beforeEach(() => {
        store = configureStore({ reducer: { notes: notesReducer } });
    });

    it('should return the initial state', () => {
        const state = store.getState().notes;
        expect(state).toEqual({ notes: [] });
    });

    it('should add a note', () => {
        const newNote: Omit<NoteType, 'id'> = {
            title: 'New Note',
            details: 'Some details about the note',
            color: 'yellow',
            fontColor: 'black',
            date: '2023-10-01',
        };
        store.dispatch(addNote(newNote));
        
        const state = store.getState().notes;
        expect(state.notes.length).toBe(1);
        expect(state.notes[0]).toMatchObject({ title: 'New Note', details: 'Some details about the note' });
    });

    it('should delete a note', () => {
        const newNote: Omit<NoteType, 'id'> = {
            title: 'Note to delete',
            details: 'Details',
            color: 'red',
            fontColor: 'white',
            date: '2023-10-01',
        };
        store.dispatch(addNote(newNote));
        const stateBeforeDelete = store.getState().notes;
        const noteToDeleteId = stateBeforeDelete.notes[0].id;

        store.dispatch(deleteNote(noteToDeleteId));
        
        const stateAfterDelete = store.getState().notes;
        expect(stateAfterDelete.notes).toHaveLength(0);
    });

    it('should update a note', () => {
        const newNote: Omit<NoteType, 'id'> = {
            title: 'Note to update',
            details: 'Initial details',
            color: 'green',
            fontColor: 'black',
            date: '2023-10-01',
        };
        store.dispatch(addNote(newNote));
        const stateBeforeUpdate = store.getState().notes;
        const noteToUpdateId = stateBeforeUpdate.notes[0].id;

        store.dispatch(updateNote({ ...stateBeforeUpdate.notes[0], title: 'Updated Note' }));
        
        const stateAfterUpdate = store.getState().notes;
        expect(stateAfterUpdate.notes[0].title).toBe('Updated Note');
    });

    it('should set notes', () => {
        const notes: NoteType[] = [
            { id: '1', title: 'Task 1', details: 'Details of task 1', color: 'blue', fontColor: 'white', date: '2023-10-01' },
            { id: '2', title: 'Task 2', details: 'Details of task 2', color: 'yellow', fontColor: 'black', date: '2023-10-02' },
        ];
        store.dispatch(setNotes(notes));
        
        const state = store.getState().notes;
        expect(state.notes).toEqual(notes);
    });
});