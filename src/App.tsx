import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./components/CreateNote/CreateNote";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";
import BasicDateRangeCalendar from "./components/Calendar/BasicDateRangeCalendar";
import useNotes from './hooks/useNotes'; // Импорт хука useNotes
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {  
    const [darkMode, setDarkMode] = useState(false);
    const { notes } = useNotes(); // Используем хук для получения заметок

    const toggleStyle = {
        backgroundColor: darkMode ? "var(--body-color)" : "var(--orange-color)",
        textColor: darkMode ? 'rgba(202, 98, 23, 0.77)' : 'rgba(0, 0, 0, 0.87)',
        iconColor: darkMode ? 'rgba(202, 98, 23, 0.77)' : 'rgba(0, 0, 0, 0.87)',
        iconHover: {
            backgroundColor: darkMode ? 'rgb(204, 201, 201)' : 'rgba(202, 98, 23, 0.94)' 
        }
    };

    const handleToggleDarkMode = useCallback(() => {
        setDarkMode(prevMode => !prevMode);
    }, []);
    
    return (
        <main style={{ minHeight: '100vh' }} className={darkMode ? 'dark-mode' : ''}>
            <div className="container">
                    <ToastContainer />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Note notes={notes} handleToggleDarkMode={handleToggleDarkMode} toggleStyle={toggleStyle} darkMode={darkMode}/>} />
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