import React, { useEffect, useState } from "react";
import NoteItem from "../NoteItem/NoteItem";
import Search from "../Search/Search";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { Grid, Typography, Box, IconButton, CircularProgress } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from "react-redux";
import { NotesState } from "../../redux/features/notesSlice";
import { NoteType } from "../../types/type";
import useLoadNotes from "../../hooks/useLoadNotes"; 

interface NoteProps {
  darkMode: boolean;
  handleToggleDarkMode: () => void;
  toggleStyle: {
    backgroundColor: string;
    textColor: string;
    iconHover: {
      backgroundColor: string;
    };
    iconColor: string;
  };
}

const Note: React.FC<NoteProps> = React.memo((props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, notes: loadedNotes } = useLoadNotes(); 
  const reduxNotes = useSelector((state: { notes: NotesState }) => state.notes.notes) || []; 
  const [filteredNotes, setFilteredNotes] = useState<NoteType[]>([]);

    // Effect to filter notes whenever loaded notes, redux notes, or search term change
  useEffect(() => {
    const allNotes = loadedNotes.length > 0 ? loadedNotes : reduxNotes; 
    if (Array.isArray(allNotes)) {
      const filtered = allNotes.filter(note =>
            note.title && note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  }, [loadedNotes, reduxNotes, searchTerm]);

  return (
    <>
      <Header 
        darkMode={props.darkMode} 
        handleToggleDarkMode={props.handleToggleDarkMode} 
        toggleStyle={props.toggleStyle} 
      />
      <Search 
        notes={filteredNotes} 
        setSearchTerm={setSearchTerm} 
        toggleStyle={props.toggleStyle} 
      />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <CircularProgress color='warning' />
        </Box>
      ) : (
        <>
          {filteredNotes.length === 0 && (
            <Typography 
              variant="body1" 
              color={props.toggleStyle.textColor} 
              align="center" 
              sx={{ margin: 2 }}>
              No notes found
            </Typography>
          )}
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {filteredNotes.map(note => (
              <Grid item xs={12} sm={6} md={4} key={note.id}>
                <NoteItem
                  note={note}
                  toggleStyle={props.toggleStyle}
                  sx={{
                    backgroundColor: props.toggleStyle.backgroundColor,
                    color: props.toggleStyle.textColor,
                    borderRadius: '8px',
                    boxShadow: 2,
                    padding: 2,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
        {/* Button to create a new note */}
      <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <IconButton
            sx={{
              ...props.toggleStyle,
              fontSize: '2rem',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: props.toggleStyle.iconHover.backgroundColor,
                transform: 'scale(1.1)',
                transition: '0.2s'
              }
            }}
          >
            <AddIcon style={{ color: props.toggleStyle.iconColor }} />
          </IconButton>
        </Link>
      </Box>
    </>
  );
});

export default Note;