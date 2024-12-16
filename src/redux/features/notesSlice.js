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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNotes = exports.updateNote = exports.deleteNote = exports.addNote = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    notes: [],
};
var notesSlice = (0, toolkit_1.createSlice)({
    name: 'notes',
    initialState: initialState,
    reducers: {
        addNote: {
            reducer: function (state, action) {
                state.notes.push(action.payload);
            },
            prepare: function (_a) {
                var id = _a.id, title = _a.title, details = _a.details, color = _a.color, fontColor = _a.fontColor, date = _a.date;
                return {
                    payload: {
                        id: id,
                        title: title,
                        details: details,
                        date: date,
                        color: color,
                        fontColor: fontColor,
                    },
                };
            },
        },
        deleteNote: function (state, action) {
            state.notes = state.notes.filter(function (note) { return note.id !== action.payload; });
        },
        updateNote: function (state, action) {
            var index = state.notes.findIndex(function (note) { return note.id === action.payload.id; });
            if (index !== -1) {
                state.notes[index] = __assign(__assign({}, state.notes[index]), action.payload);
            }
        },
        setNotes: function (state, action) {
            state.notes = Array.isArray(action.payload) ? action.payload : []; // Убедитесь, что это массив
        },
    },
});
// Экспортируем действия
exports.addNote = (_a = notesSlice.actions, _a.addNote), exports.deleteNote = _a.deleteNote, exports.updateNote = _a.updateNote, exports.setNotes = _a.setNotes;
// Экспортируем редюсер по умолчанию
exports.default = notesSlice.reducer;
