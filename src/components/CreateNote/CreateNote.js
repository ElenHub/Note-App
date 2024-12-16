"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var NoteContainer_1 = __importDefault(require("../NoteContainer/NoteContainer"));
var CreateNote = function (props) { return ((0, jsx_runtime_1.jsx)(NoteContainer_1.default, { toggleStyle: props.toggleStyle, isEditMode: false })); };
exports.default = CreateNote;
