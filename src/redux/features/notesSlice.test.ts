// import notesReducer, { addNote, deleteNote, updateNote, setNotes, NotesState } from './notesSlice';
// import { NoteType } from '../../types/type';
// import { v4 as uuidv4 } from 'uuid';

// describe('notesSlice', () => {
//     const initialState: NotesState = {
//         notes: [
//             { id: '1', title: 'Note 1', details: 'Details 1', date: '2023-10-01', color: '#ffffff', fontColor: '#000000' },
//             { id: '2', title: 'Note 2', details: 'Details 2', date: '2023-10-01', color: '#ffffff', fontColor: '#000000' }
//         ]
//     };

//     it('should handle initial state', () => {
//         const expectedState: NotesState = { notes: [] }; // Ожидаем пустой массив
//         expect(notesReducer(undefined, { type: 'unknown' })).toEqual(expectedState);
//     });
    
//     it('should handle addNote', () => {
//         const note = {
//             title: 'Test Note',
//             details: 'Test Details',
//             color: '#ffffff',
//             fontColor: '#000000',
//             date: '2023-10-01',
//             id: uuidv4(), 
//         };
//         const action = addNote(note);
//         const state = notesReducer(initialState, action);
//         expect(state.notes).toEqual([...initialState.notes, action.payload]);
//     });

//     it('should handle deleteNote', () => {
//         const initialStateWithNotes: NotesState = {
//             notes: [
//                 { id: '1', title: 'Note 1', details: 'Details 1', date: '2023-10-01', color: '#ffffff', fontColor: '#000000' },
//                 { id: '2', title: 'Note 2', details: 'Details 2', date: '2023-10-01', color: '#ffffff', fontColor: '#000000' },
//             ]
//         };
//         const action = deleteNote('1');
//         const state = notesReducer(initialStateWithNotes, action);
//         expect(state.notes).toEqual([
//             { id: '2', title: 'Note 2', details: 'Details 2', date: '2023-10-01', color: '#ffffff', fontColor: '#000000' },
//         ]);
//     });

//     it('should handle updateNote', () => {
//         const noteToUpdate: NoteType = { id: '1', title: 'Updated Note', details: 'Updated Details', color: '#ffffff', fontColor: '#000000', date: '2023-10-01' };
//         const initialStateWithNotes: NotesState = {
//             notes: [noteToUpdate],
//         };
//         const updatedNote: NoteType = { id: '1', title: 'New Title', details: 'New Details', color: '#ffffff', fontColor: '#000000', date: '2023-10-01'  };
//         const action = updateNote(updatedNote);
//         const state = notesReducer(initialStateWithNotes, action);
//         expect(state.notes).toEqual([{ ...noteToUpdate, ...updatedNote }]);
//     });

//     it('should handle setNotes', () => {
//         const newNotes: NoteType[] = [
//             { id: '1', title: 'Note 1', details: 'Details 1', date: '2023-10-01', color: '#ffffff', fontColor: '#000000' },
//         ];
//         const action = setNotes( newNotes );
//         const state = notesReducer(initialState, action);
//         expect(state.notes).toEqual(newNotes);
//     });
// });



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