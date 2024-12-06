import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../redux/features/notesSlice';
import taskReducer from '../redux/features/tasksSlice';
import { RootState } from '../types/type';

const store = configureStore({
    reducer: {
        notes: notesReducer,
        tasks: taskReducer
    },
    // Убираем localStorageMiddleware
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware(), // Просто используем стандартные middleware
});

export const AppDispatch = typeof store.dispatch;
export default store;
export type { RootState };
