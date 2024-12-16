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
// tasksSlice.test.ts
var toolkit_1 = require("@reduxjs/toolkit");
var tasksSlice_1 = __importStar(require("./tasksSlice"));
describe('tasksSlice', function () {
    var store;
    beforeEach(function () {
        store = (0, toolkit_1.configureStore)({ reducer: { tasks: tasksSlice_1.default } });
    });
    it('should return the initial state', function () {
        var state = store.getState().tasks;
        expect(state).toEqual([]);
    });
    it('should add a task', function () {
        var newTask = { title: 'New Task', date: '2023-10-01' };
        store.dispatch((0, tasksSlice_1.addTask)(newTask));
        var state = store.getState().tasks;
        expect(state.length).toBe(1);
        expect(state[0]).toMatchObject({ title: 'New Task', isDone: false, date: '2023-10-01' });
    });
    it('should delete a task', function () {
        store.dispatch((0, tasksSlice_1.addTask)({ title: 'Task to delete', date: '2023-10-01' }));
        var stateBeforeDelete = store.getState().tasks;
        var taskToDeleteId = stateBeforeDelete[0].id;
        store.dispatch((0, tasksSlice_1.deleteTask)(taskToDeleteId));
        var stateAfterDelete = store.getState().tasks;
        expect(stateAfterDelete).toHaveLength(0);
    });
    it('should update a task', function () {
        store.dispatch((0, tasksSlice_1.addTask)({ title: 'Task to update', date: '2023-10-01' }));
        var stateBeforeUpdate = store.getState().tasks;
        var taskToUpdateId = stateBeforeUpdate[0].id;
        store.dispatch((0, tasksSlice_1.updateTask)(__assign(__assign({}, stateBeforeUpdate[0]), { title: 'Updated Task' })));
        var stateAfterUpdate = store.getState().tasks;
        expect(stateAfterUpdate[0].title).toBe('Updated Task');
    });
    it('should toggle task completion', function () {
        store.dispatch((0, tasksSlice_1.addTask)({ title: 'Task to toggle', date: '2023-10-01' }));
        var stateBeforeToggle = store.getState().tasks;
        var taskToToggleId = stateBeforeToggle[0].id;
        store.dispatch((0, tasksSlice_1.toggleTaskCompletion)(taskToToggleId));
        var stateAfterToggle = store.getState().tasks;
        expect(stateAfterToggle[0].isDone).toBe(true); // Проверяем, что задача теперь выполнена
        store.dispatch((0, tasksSlice_1.toggleTaskCompletion)(taskToToggleId));
        var stateAfterSecondToggle = store.getState().tasks;
        expect(stateAfterSecondToggle[0].isDone).toBe(false); // Проверяем, что задача снова не выполнена
    });
    it('should update task title', function () {
        store.dispatch((0, tasksSlice_1.addTask)({ title: 'Initial Title', date: '2023-10-01' }));
        var stateBeforeUpdateTitle = store.getState().tasks;
        var taskToUpdateId = stateBeforeUpdateTitle[0].id;
        store.dispatch((0, tasksSlice_1.updateTaskTitle)({ id: taskToUpdateId, newTitle: 'New Title' }));
        var stateAfterUpdateTitle = store.getState().tasks;
        expect(stateAfterUpdateTitle[0].title).toBe('New Title');
    });
    it('should set tasks', function () {
        var tasks = [
            { id: '1', title: 'Task 1', isDone: false, date: '2023-10-01' },
            { id: '2', title: 'Task 2', isDone: true, date: '2023-10-02' }
        ];
        store.dispatch((0, tasksSlice_1.setTasks)(tasks));
        var state = store.getState().tasks;
        expect(state).toEqual(tasks);
    });
});
