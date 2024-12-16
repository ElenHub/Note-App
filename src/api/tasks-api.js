"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var instance = axios_1.default.create({
    baseURL: 'http://localhost:5000/api/',
});
exports.tasksAPI = {
    getTasks: function () {
        return instance.get("tasks");
    },
    deleteTasks: function (id) {
        return instance.delete("tasks/".concat(id));
    },
    createTasks: function (title) {
        return instance.post("tasks", { title: title });
    },
    // toggleTask(id:string){
    //     return instance.post("tasks")
    //  },\
    toggleTask: function (id, isDone) {
        return instance.patch("tasks/".concat(id), { isDone: isDone }); // Используем PATCH для обновления статуса
    },
    updateTasks: function (id, title) {
        return instance.put("tasks/".concat(id), { title: title });
    },
    updateDate: function (id, newDate) {
        return instance.put("tasks/".concat(id), { date: newDate });
    },
};
