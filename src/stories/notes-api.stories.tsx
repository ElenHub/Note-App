import React, { useEffect, useState } from "react";
import { notesAPI } from "../api/notes-api";

export default{
    title:'API',
}

 const settings={
    todoListId:'1733661516165'
}

export const getNotes=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
        notesAPI.getNotes()
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateNotes=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
       notesAPI.createNotes('iihihiihiiihihi', 'lol')
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteNotes=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
            const todoListId='1733662683304'
       notesAPI.deleteNotes(todoListId)
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])

    return <div>{JSON.stringify(state)}
    </div>
}
export const UpdateNotes=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
         const todoListId='1733681848045'
       notesAPI.updateNotes(todoListId, 'oooiiiooo', 'deded')
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])
     
    return <div>{JSON.stringify(state)}</div>
}