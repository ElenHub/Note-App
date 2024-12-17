import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const feedbackApi = {
    getFeedback: () => instance.get("feedback"),   // Function to get all feedback entries
    createFeedback: (title:string) => instance.post("feedback", { title })   // Function to create a new feedback entry with a title

};