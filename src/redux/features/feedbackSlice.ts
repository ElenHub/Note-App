import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    feedbackList: [],
    loading: false,
    error: null,
};

const feedbackSlice = createSlice({
    name: 'feedbackSlice',
    initialState,
    reducers: {
        addFeedback: {
            reducer: (state, action) => {
                state.feedbackList.push(action.payload);
            },
            prepare: (title) => {
                return { payload: { id: uuidv4(), title: title }}; 
            },
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearFeedback: (state) => {
            state.feedbackList = [];
        },
    },
});

export const { addFeedback, setLoading, setError, clearFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
