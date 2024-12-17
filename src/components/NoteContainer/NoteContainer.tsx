
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteForm from "../NoteForm/NoteForm";
import useNotes from "../../hooks/useNotes";
import dayjs from "dayjs";
import ColorCategorySelector from '../ColorCtaegorySelector/ColorCategorySelector'
import { BackButton } from "../BackButton/BackButton";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { Box, Typography, Paper } from "@mui/material";
import { ToggleStyleType } from "../../types/type";

export interface Note {
  id: string;
  title: string;
  details: string;
  fontColor: string;
  color: string;
  category: string;
  date: string;
}

interface NoteContainerProps {
  isEditMode: boolean;
  initialNote?: Note;
  toggleStyle: ToggleStyleType;
}

const NoteContainer: React.FC<NoteContainerProps> = ({
  isEditMode,
  initialNote,
  toggleStyle,
}) => {
    const { createNote, updateNoteAsync } = useNotes();
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState<string>(initialNote ? initialNote.title : "");
  const [details, setDetails] = useState<string>(initialNote ? initialNote.details : "");
  const [errors, setErrors] = useState<{ title?: string; details?: string }>({});
  const [color, setColor] = useState<string>("#ffffff");
  const [fontColor, setFontColor] = useState<string>(initialNote ? initialNote.fontColor : "#000000");
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());
  const [category, setCategory] = useState<string>(initialNote ? initialNote.category : "default");
    const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!details.trim()) newErrors.details = "Details are required";
        setErrors(newErrors);
        return !newErrors.title && !newErrors.details;
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
      const noteData: Note = {
                id: isEditMode ? id : uuidv4(),
                title,
                details,
        fontColor,
        color,
        category,
        date: selectedDate.format("YYYY-MM-DD"),
            };
      // Создаем или обновляем заметку в зависимости от режима
            if (isEditMode) {
                await updateNoteAsync(noteData);
            } else {
                await createNote(noteData);
            }
            toast.success(`The note has been successfully ${isEditMode ? 'updated' : 'created'}!`);
            navigate("/");
        }
    };

  const handleChange = (field: "title" | "details", value: string) => {
    if (field === "title") {
      setTitle(value);
      setErrors((prevErrors) => ({ ...prevErrors, title: "" }));
    }
    if (field === "details") {
      setDetails(value);
      setErrors((prevErrors) => ({ ...prevErrors, details: "" }));
    }
  };

    return (
    <Box sx={{ padding: 2, backgroundColor: toggleStyle.backgroundColor }}>
      <BackButton iconColor={toggleStyle.iconColor} />
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h5" sx={{ color: toggleStyle.textColor, marginBottom: 2 }}>
          {isEditMode ? "Edit a note" : "Create a new note"}
        </Typography>
            <NoteForm
                title={title}
                details={details}
                onSubmit={handleSubmit}
          onChange={handleChange}
                errors={errors}
          fontColor={fontColor}
          toggleStyle={toggleStyle}
        />
        <ColorCategorySelector
          fontColor={fontColor}
          setColor={setColor}
          setFontColor={setFontColor}
          toggleStyle={toggleStyle}
          isEditMode={isEditMode}
          category={category}
          setCategory={setCategory}
            />
      </Paper>
        </Box>
    );
};

export default NoteContainer;

