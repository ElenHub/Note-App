"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTasks = exports.DeleteTasks = exports.CreateTasks = exports.getTasks = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tasks_api_1 = require("../api/tasks-api");
exports.default = {
    title: 'API',
};
var settings = {
    todoListId: '1733684712589'
};
var getTasks = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        tasks_api_1.tasksAPI.getTasks()
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.getTasks = getTasks;
var CreateTasks = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        tasks_api_1.tasksAPI.createTasks('iihihiihiiihihi', 'lol')
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.CreateTasks = CreateTasks;
var DeleteTasks = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        var todoListId = '1733684741536';
        tasks_api_1.tasksAPI.deleteTasks(todoListId)
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.DeleteTasks = DeleteTasks;
var UpdateTasks = function () {
    var _a = (0, react_1.useState)(null), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        var todoListId = '1733684712589';
        tasks_api_1.tasksAPI.updateTasks(todoListId, 'oooiiiooo', 'deded')
            .then(function (res) {
            debugger;
            setState(res.data);
        });
    }, []);
    return (0, jsx_runtime_1.jsx)("div", { children: JSON.stringify(state) });
};
exports.UpdateTasks = UpdateTasks;
