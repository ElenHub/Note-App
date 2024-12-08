import React, { useEffect, useState } from "react";
import { tasksAPI } from "../api/tasks-api";

export default{
    title:'API',
}

 const settings={
    todoListId:'1733684712589'
}

export const getTasks=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
        tasksAPI.getTasks()
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateTasks=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
       tasksAPI.createTasks('iihihiihiiihihi', 'lol')
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTasks=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
            const todoListId='1733684741536'
       tasksAPI.deleteTasks(todoListId)
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])

    return <div>{JSON.stringify(state)}
    </div>
}
export const UpdateTasks=()=>{
    const [state, setState]=useState<any>(null)

    useEffect(()=>{
         const todoListId='1733684712589'
       tasksAPI.updateTasks(todoListId, 'oooiiiooo', 'deded')
     .then((res)=>{
        debugger
        setState(res.data)
    })
    }, [])
     
    return <div>{JSON.stringify(state)}</div>
}
