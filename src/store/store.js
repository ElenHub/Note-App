"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDispatch = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var notesSlice_1 = __importDefault(require("../redux/features/notesSlice"));
var tasksSlice_1 = __importDefault(require("../redux/features/tasksSlice"));
var store = (0, toolkit_1.configureStore)({
    reducer: {
        notes: notesSlice_1.default,
        tasks: tasksSlice_1.default
    },
    // Убираем localStorageMiddleware
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware();
    }, // Просто используем стандартные middleware
});
exports.AppDispatch = typeof store.dispatch;
exports.default = store;
