export interface RootState {
    notes: NotesState;
    tasks: TasksState;
}
export interface Note {
    id: string;
    title: string;
    details: string;
    color: string;
    date: string;
}

export interface NoteItemProps {
    note: Note; 
}

export interface NoteType {
    id: string;
    title: string;
    details: string;
    date: string;
    color: string;
    fontColor: string;
}

export interface TaskType {
    id: string;
    title: string;
    isDone: boolean;
    date: string;
    dueDate: string;
    
}

export interface ToggleStyleType {
    toggleStyle: {
      iconColor: string
      color: string
      backgroundColor: string
    };
  }