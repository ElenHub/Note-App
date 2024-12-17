import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const notesAPI = {
    getNotes: () => instance.get("notes"),   // Function to get all notes
    deleteNotes: (id: string) => instance.delete(`notes/${id}`),   // Function to delete a note by its ID
    createNotes: (title: string, details: string, color: string, fontColor: string, category: string) => 
        instance.post("notes", { title, details, color, fontColor, category }),   // Function to create a new note with specified properties
    updateNotes: (id: string, title: string, details: string, color: string, fontColor: string, category: string) => 
        instance.put(`notes/${id}`, { title, details, color, fontColor, category }),   // Function to update an existing note by its ID
};
