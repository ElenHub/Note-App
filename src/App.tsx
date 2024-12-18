import React, { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateNote from "./components/CreateNote/CreateNote";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";
import BasicDateRangeCalendar from "./components/Calendar/BasicDateRangeCalendar";
import { ToastContainer } from 'react-toastify';
import useNotes from './hooks/useNotes'; // Импорт хука useNotes
import 'react-toastify/dist/ReactToastify.css';
import { getToggleStyle, ToggleStyle } from './styles'; 
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {  
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true'; 
    });
    const { notes } = useNotes();
    const toggleStyle: ToggleStyle = getToggleStyle(darkMode); 

    const handleToggleDarkMode = useCallback(() => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode); // Сохраняем новое состояние в localStorage
            return newMode;
        });
    }, []);
    
    return (
        <main style={{ minHeight: '100vh' }} className={darkMode ? 'dark-mode' : ''}>
            <div className="container">
                    <ToastContainer />
                    <Routes>
                        <Route path="/" element={<Note notes={notes} handleToggleDarkMode={handleToggleDarkMode} toggleStyle={toggleStyle} darkMode={darkMode}/>} />
                        <Route path="/calendar" element={<BasicDateRangeCalendar toggleStyle={toggleStyle} />} />
                        <Route path="/create" element={<CreateNote toggleStyle={toggleStyle}/>} />
                        <Route path="/edit/:id" element={<EditNote toggleStyle={toggleStyle}/>} />
                        <Route path="/feedback" element={<FeedbackForm toggleStyle={toggleStyle}/>} />
                    </Routes>
            </div>
        </main>
    );
}

export default App;