"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var useNotes_1 = __importDefault(require("../../hooks/useNotes"));
var ConfirmationDialog_1 = __importDefault(require("../ConfirmationDialog/ConfirmationDialog"));
var NoteItem = function (props) {
    var removeNote = (0, useNotes_1.default)().removeNote;
    var _a = react_1.default.useState(false), open = _a[0], setOpen = _a[1]; // Состояние для управления открытием диалога
    var _b = react_1.default.useState(null), noteToDelete = _b[0], setNoteToDelete = _b[1]; // ID заметки для удаления
    var handleDelete = function () {
        if (noteToDelete) {
            removeNote(noteToDelete);
            setNoteToDelete(null); // Сбросить ID после удаления
        }
        setOpen(false); // Закрыть диалог
    };
    var handleOpen = function (id) {
        setNoteToDelete(id); // Установить ID для удаления
        setOpen(true); // Открыть диалог
    };
    var handleClose = function () {
        setOpen(false); // Закрыть диалог
        setNoteToDelete(null); // Сбросить ID
    };
    if (!props.note) {
        return null; // Можно вернуть либо null, либо какое-то заполнение
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Card, { sx: { backgroundColor: props.note.color, marginBottom: 2, borderRadius: '15px' }, children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/edit/".concat(props.note.id), style: { textDecoration: 'none' }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", component: "div", color: "text.primary", children: props.note.title.length > 20 ? (props.note.title.substr(0, 20)) + '...' : props.note.title }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/edit/".concat(props.note.id), style: { textDecoration: 'none' }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", color: "text.secondary", children: props.note.details.length > 46 ? (props.note.details.substr(0, 46)) + '...' : props.note.details }) }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "caption", color: "text.secondary", children: props.note.date }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { sx: { color: 'error', '&:hover': {
                                    transform: 'scale(1.1)', // Увеличение при наведении
                                    transition: 'transform 0.2s', // Плавный переход
                                } }, onClick: function () { return handleOpen(props.note.id); }, children: (0, jsx_runtime_1.jsx)(icons_material_1.Delete, { color: 'error' }) }), (0, jsx_runtime_1.jsx)(ConfirmationDialog_1.default, { open: open, handleClose: handleClose, handleConfirm: handleDelete, itemType: "note" })] })] }) }));
};
exports.default = NoteItem;
