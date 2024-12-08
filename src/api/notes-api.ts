import axios from "axios"

const instance=axios.create({
    baseURL:'http://localhost:5000/api/',
})

export const notesAPI={
    getNotes(){
    return instance.get("notes")
    },
    deleteNotes(id:string){
        return instance.delete(`notes/${id}`)
    },
    createNotes(title:string, details:string){
       return instance.post("notes",  { title, details })
    },
    updateNotes(id:string, title:string, details:string){
        return instance.put(`notes/${id}`,  { title, details })
    },
}