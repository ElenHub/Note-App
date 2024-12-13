import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NoteForm from "../NoteForm/NoteForm";
import useNotes from "../../hooks/useNotes";
import dayjs from "dayjs";
import ChangeCategoryColorSelector from "../ChangeCategoryColorSelector/ChangeCategoryColorSelector";
import CategoryColorSelector from "../CategoryColorSelector/CategoryColorSelector";
import { IconButton } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { ToggleStyleType } from "../../types/type";
import ColorCategorySelector from "../ColorCtaegorySelector/ColorCategorySelector";
import { BackButton } from "../BackButton/BackButton";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

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
  toggleFormStyle: {
    backgroundColor: string;
    textColor: string;
    iconColor: string;
    iconHover: {
      backgroundColor: string;
    };
  };
}

const NoteContainer: React.FC<NoteContainerProps> = ({
  isEditMode,
  initialNote,
  toggleStyle,
}) => {
  const { createNote, editNote } = useNotes();
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState<string>(
    initialNote ? initialNote.title : ""
  );
  const [details, setDetails] = useState<string>(
    initialNote ? initialNote.details : ""
  );
  const [errors, setErrors] = useState<string>({});
  const [color, setColor] = useState<string>("#ffffff");
  const [fontColor, setFontColor] = useState<string>(
    initialNote ? initialNote.fontColor : "#000000"
  );
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());
  const [category, setCategory] = useState<string>(
    initialNote ? initialNote.category : "default"
  );
  const navigate = useNavigate();


  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!details.trim()) newErrors.details = "Details are required";
    setErrors(newErrors);
    return !newErrors.title && !newErrors.details;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      console.log("Note Data:", noteData);
      if (isEditMode) {
        editNote(id, title, details, color, fontColor, category);
        toast.success("Заметка успешно обновлена!");
      } else {
        createNote(noteData);
        toast.success("Заметка успешно создана!");
      }
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
    <div>
      <BackButton iconColor={toggleStyle.iconColor} />
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
    </div>
  );
};

export default NoteContainer;
