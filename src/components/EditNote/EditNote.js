"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var useNotes_1 = __importDefault(require("../../hooks/useNotes"));
var NoteContainer_1 = __importDefault(require("../NoteContainer/NoteContainer"));
var EditNote = function (props) {
    var id = (0, react_router_dom_1.useParams)().id;
    var notes = (0, useNotes_1.default)().notes;
    var note = notes.find(function (note) { return note.id === id; });
    return note ? (0, jsx_runtime_1.jsx)(NoteContainer_1.default, { toggleStyle: props.toggleStyle, isEditMode: true, initialNote: note }) : (0, jsx_runtime_1.jsx)("p", { children: "Note not found" });
};
exports.default = EditNote;
