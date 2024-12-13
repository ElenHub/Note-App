import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { TaskType } from "../../types/type";

export type TasksState = TaskType[];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [] as TasksState,
    reducers: {
        addTask: {
            reducer: (state, action: PayloadAction<TaskType>) => {
                state.push(action.payload);
            },
            prepare: ({ title, date }: Omit<TaskType, 'id' | 'isDone'>) => {
                return {
                    payload: {
                        id: uuidv4(),
                        title,
                        isDone: false,
                        date
                    }
                };
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            return state.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<Partial<TaskType> & { id: string }>) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
        // toggleTaskCompletion: (state, action: PayloadAction<{ id: string, newStatus:boolean}>) => {
        //     const { id, newStatus } = action.payload;
        //     const task = state.find(task => task.id === id ? { ...task, isDone: newStatus } : task);
        // },
        toggleTaskCompletion: (state, action: PayloadAction<{ id: string, newStatus:boolean}>) => {
            const { id, newStatus } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.isDone = newStatus; // Здесь вы обновляете статус задачи
            }
        },
        updateTaskTitle: (state, action: PayloadAction<{ id: string; newTitle: string }>) => {
            const { id, newTitle } = action.payload;
            return state.map(task => task.id === id ? { ...task, title: newTitle } : task);
        },
        updateTaskDate: (state, action: PayloadAction<{ id: string; newDate: string }>) => {
            const { id, newDate } = action.payload;
            return state.map(task => task.id === id ? { ...task, date: newDate } : task);
        },
        setTasks: (state, action: PayloadAction<TasksState>) => {
            return action.payload;
        }
    }
});

export const {
    addTask,
    deleteTask,
    updateTask,
    toggleTaskCompletion,
    setTasks,
    updateTaskTitle,
    updateTaskDate
} = tasksSlice.actions;

export default tasksSlice.reducer;