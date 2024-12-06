import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./components/CreateNote/CreateNote";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";
import BasicDateRangeCalendar from "./components/Calendar/BasicDateRangeCalendar";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "./redux/features/notesSlice";
// import CircularProgress from '@mui/material/CircularProgress';


function App() {  
    const [darkMode, setDarkMode] = useState(false);
    const notes = useSelector(state => state.notes);
    // const [loading, setLoading] = useState(true); 
    const dispatch = useDispatch();

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            const parsedNotes = JSON.parse(savedNotes);
            dispatch(setNotes(parsedNotes));
        }
    }, [dispatch]);
    // useEffect(() => {
    //     const savedNotes = localStorage.getItem('notes');
    //     if (savedNotes) {
    //         const parsedNotes = JSON.parse(savedNotes);
    //         dispatch(setNotes(parsedNotes));
    //     }
    //     setLoading(false); // Устанавливаем загрузку в false после загрузки данных
    // }, [dispatch]);

    const toggleStyle = {
                backgroundColor: darkMode ? "var(--body-color)" : "var(--orange-color)",
               textColor: darkMode  ? 'rgba(202, 98, 23, 0.77)': 'rgba(0, 0, 0, 0.87)' ,
              iconColor: darkMode  ? 'rgba(202, 98, 23, 0.77)': 'rgba(0, 0, 0, 0.87)' , 
              iconHover: {
                backgroundColor: darkMode  ? 'rgb(204, 201, 201)':'rgba(202, 98, 23, 0.94)' 
            } 
            };

            const handleToggleDarkMode = useCallback(() => {
                setDarkMode(darkMode => !darkMode);
            }, []);
    
    return (
        <main style={{ minHeight: '100vh' }} className={darkMode ? 'dark-mode' : ''}>
            <div className="container">
            
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Note notes={notes} setNotes={setNotes}  handleToggleDarkMode={handleToggleDarkMode} toggleStyle={toggleStyle} darkMode={darkMode}/>} />
                    <Route path="/calendar" element={<BasicDateRangeCalendar toggleStyle={toggleStyle} />} />
                    <Route path="/create" element={<CreateNote toggleStyle={toggleStyle}/>} />
                    <Route path="/edit/:id" element={<EditNote toggleStyle={toggleStyle}/>} />
                </Routes>
                </BrowserRouter>
             
            </div>
        </main>
    );
}

export default App;
