import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const tasksAPI = {
    getTasks: () => instance.get("tasks"),   // Function to get all tasks
    deleteTasks: (id: string) => instance.delete(`tasks/${id}`),   // Function to delete a task by its ID
    createTasks: (title: string) => instance.post("tasks", { title }),   // Function to create a new task with a title
    toggleTask: (id: string, isDone: boolean) => instance.patch(`tasks/${id}`, { isDone }),   // Function to toggle the completion status of a task
    updateTasks: (id: string, title: string) => instance.put(`tasks/${id}`, { title }),   // Function to update the title of an existing task by its ID
    updateDate: (id: string, newDate: string) => instance.put(`tasks/${id}`, { date: newDate }),     // Function to update the date of a task by its ID
};