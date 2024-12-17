import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../redux/features/notesSlice';
import taskReducer from '../redux/features/tasksSlice';
import feedbackReducer from '../redux/features/feedbackSlice';
import { RootState } from '../types/type';
import {thunk} from 'redux-thunk';

const store = configureStore({
    reducer: {
        notes: notesReducer,
        tasks: taskReducer,
        feedback: feedbackReducer
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(thunk),
});

export const AppDispatch = typeof store.dispatch;
export default store;
export type { RootState };
