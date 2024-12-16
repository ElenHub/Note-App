"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotes = exports.DeleteNotes = exports.CreateNotes = exports.getNotes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var notes_api_1 = require("../api/notes-api");
exports.default = {
    title: 'API',
};
var settings = {
    todoListId: '1733661516165'
};
var getNotes = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        notes_api_1.notesAPI.getNotes()
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.getNotes = getNotes;
var CreateNotes = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        notes_api_1.notesAPI.createNotes('iihihiihiiihihi', 'lol')
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.CreateNotes = CreateNotes;
var DeleteNotes = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        var todoListId = '1733662683304';
        notes_api_1.notesAPI.deleteNotes(todoListId)
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.DeleteNotes = DeleteNotes;
var UpdateNotes = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        var todoListId = '1733681848045';
        notes_api_1.notesAPI.updateNotes(todoListId, 'oooiiiooo', 'deded')
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.UpdateNotes = UpdateNotes;
