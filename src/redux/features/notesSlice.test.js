"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var notesSlice_1 = __importStar(require("./notesSlice"));
describe('notesSlice', function () {
    var store;
    beforeEach(function () {
        store = (0, toolkit_1.configureStore)({ reducer: { notes: notesSlice_1.default } });
    });
    it('should return the initial state', function () {
        var state = store.getState().notes;
        expect(state).toEqual({ notes: [] });
    });
    it('should add a note', function () {
        var newNote = {
            title: 'New Note',
            details: 'Some details about the note',
            color: 'yellow',
            fontColor: 'black',
            date: '2023-10-01',
        };
        store.dispatch((0, notesSlice_1.addNote)(newNote));
        var state = store.getState().notes;
        expect(state.notes.length).toBe(1);
        expect(state.notes[0]).toMatchObject({ title: 'New Note', details: 'Some details about the note' });
    });
    it('should delete a note', function () {
        var newNote = {
            title: 'Note to delete',
            details: 'Details',
            color: 'red',
            fontColor: 'white',
            date: '2023-10-01',
        };
        store.dispatch((0, notesSlice_1.addNote)(newNote));
        var stateBeforeDelete = store.getState().notes;
        var noteToDeleteId = stateBeforeDelete.notes[0].id;
        store.dispatch((0, notesSlice_1.deleteNote)(noteToDeleteId));
        var stateAfterDelete = store.getState().notes;
        expect(stateAfterDelete.notes).toHaveLength(0);
    });
    it('should update a note', function () {
        var newNote = {
            title: 'Note to update',
            details: 'Initial details',
            color: 'green',
            fontColor: 'black',
            date: '2023-10-01',
        };
        store.dispatch((0, notesSlice_1.addNote)(newNote));
        var stateBeforeUpdate = store.getState().notes;
        var noteToUpdateId = stateBeforeUpdate.notes[0].id;
        store.dispatch((0, notesSlice_1.updateNote)(__assign(__assign({}, stateBeforeUpdate.notes[0]), { title: 'Updated Note' })));
        var stateAfterUpdate = store.getState().notes;
        expect(stateAfterUpdate.notes[0].title).toBe('Updated Note');
    });
    it('should set notes', function () {
        var notes = [
            { id: '1', title: 'Task 1', details: 'Details of task 1', color: 'blue', fontColor: 'white', date: '2023-10-01' },
            { id: '2', title: 'Task 2', details: 'Details of task 2', color: 'yellow', fontColor: 'black', date: '2023-10-02' },
        ];
        store.dispatch((0, notesSlice_1.setNotes)(notes));
        var state = store.getState().notes;
        expect(state.notes).toEqual(notes);
    });
});
