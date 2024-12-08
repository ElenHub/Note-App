import axios from "axios"

const instance=axios.create({
    baseURL:'http://localhost:5000/api/',
})

export const tasksAPI={
    getTasks(){
    return instance.get("tasks")
    },
    deleteTasks(id:string){
        return instance.delete(`tasks/${id}`)
    },
    createTasks(title:string,){
       return instance.post("tasks", {title})
    },
    updateTasks(id:string, title:string,){
        return instance.put(`tasks/${id}`, {title})
    },
}