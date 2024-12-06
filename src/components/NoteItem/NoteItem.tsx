import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { IconButton, Card, CardContent, Typography } from "@mui/material";
import useNotes from "../../hooks/useNotes";
import { NoteItemProps } from "../../types/type";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";


const NoteItem:React.FC<NoteItemProps> = (props) => {
    const { removeNote } = useNotes();
    const [open, setOpen] = React.useState(false); // Состояние для управления открытием диалога
    const [noteToDelete, setNoteToDelete] = React.useState<string | null>(null); // ID заметки для удаления

  
    const handleDelete = () => {
        if (noteToDelete) {
            removeNote(noteToDelete);
            setNoteToDelete(null); // Сбросить ID после удаления
        }
        setOpen(false); // Закрыть диалог
    };

    const handleOpen = (id: string) => {
        setNoteToDelete(id); // Установить ID для удаления
        setOpen(true); // Открыть диалог
    };

    const handleClose = () => {
        setOpen(false); // Закрыть диалог
        setNoteToDelete(null); // Сбросить ID
    }


    if (!props.note) {
        return null; // Можно вернуть либо null, либо какое-то заполнение
    }

    return (
        <Card sx={{ backgroundColor: props.note.color, marginBottom: 2, borderRadius:'15px' }}>
            <CardContent>
                <Link to={`/edit/${props.note.id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" component="div" color="text.primary">
                        {props.note.title.length > 20 ? (props.note.title.substr(0, 20)) + '...' : props.note.title}
                    </Typography>
                </Link>
                <Link to={`/edit/${props.note.id}`} style={{ textDecoration: 'none' }}>
                    <Typography variant="body2" color="text.secondary">
                        {props.note.details.length > 46 ? (props.note.details.substr(0, 46)) + '...' : props.note.details}
                    </Typography>
                </Link>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                    <Typography variant="caption" color="text.secondary">
                        {props.note.date}
                    </Typography>
                    <IconButton  sx={{color:'error', '&:hover': {
                        transform: 'scale(1.1)', // Увеличение при наведении
                        transition: 'transform 0.2s', // Плавный переход
                    } }} onClick={() => handleOpen(props.note.id)}>
                        <Delete color='error' />
                    </IconButton>
                    <ConfirmationDialog
                open={open}
                handleClose={handleClose}
                handleConfirm={handleDelete}
                  itemType="note"
            />
                </div>
            </CardContent>
        </Card>
    );
};

export default NoteItem;
