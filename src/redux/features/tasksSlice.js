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
exports.updateTaskDate = exports.updateTaskTitle = exports.setTasks = exports.toggleTaskCompletion = exports.updateTask = exports.deleteTask = exports.addTask = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var uuid_1 = require("uuid");
var tasksSlice = (0, toolkit_1.createSlice)({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: {
            reducer: function (state, action) {
                state.push(action.payload);
            },
            prepare: function (_a) {
                var title = _a.title, date = _a.date;
                return {
                    payload: {
                        id: (0, uuid_1.v4)(),
                        title: title,
                        isDone: false,
                        date: date
                    }
                };
            }
        },
        deleteTask: function (state, action) {
            return state.filter(function (task) { return task.id !== action.payload; });
        },
        updateTask: function (state, action) {
            var index = state.findIndex(function (task) { return task.id === action.payload.id; });
            if (index !== -1) {
                state[index] = __assign(__assign({}, state[index]), action.payload);
            }
        },
        // toggleTaskCompletion: (state, action: PayloadAction<{ id: string, newStatus:boolean}>) => {
        //     const { id, newStatus } = action.payload;
        //     const task = state.find(task => task.id === id ? { ...task, isDone: newStatus } : task);
        // },
        toggleTaskCompletion: function (state, action) {
            var _a = action.payload, id = _a.id, newStatus = _a.newStatus;
            var task = state.find(function (task) { return task.id === id; });
            if (task) {
                task.isDone = newStatus; // Здесь вы обновляете статус задачи
            }
        },
        updateTaskTitle: function (state, action) {
            var _a = action.payload, id = _a.id, newTitle = _a.newTitle;
            return state.map(function (task) { return task.id === id ? __assign(__assign({}, task), { title: newTitle }) : task; });
        },
        updateTaskDate: function (state, action) {
            var _a = action.payload, id = _a.id, newDate = _a.newDate;
            return state.map(function (task) { return task.id === id ? __assign(__assign({}, task), { date: newDate }) : task; });
        },
        setTasks: function (state, action) {
            return action.payload;
        }
    }
});
exports.addTask = (_a = tasksSlice.actions, _a.addTask), exports.deleteTask = _a.deleteTask, exports.updateTask = _a.updateTask, exports.toggleTaskCompletion = _a.toggleTaskCompletion, exports.setTasks = _a.setTasks, exports.updateTaskTitle = _a.updateTaskTitle, exports.updateTaskDate = _a.updateTaskDate;
exports.default = tasksSlice.reducer;
