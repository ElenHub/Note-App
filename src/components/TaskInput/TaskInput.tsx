import React, { useState } from 'react';
import { TextField, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
             
             
const TaskInput = (props) => {
    const [title, setTitle] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && title.trim()) {
            props.addTask(title); 
            setTitle('');
        }
    };
    const handleAddTask = () => {
        if (title.trim()) {
            props.addTask(title);
            setTitle(''); 
        }
    };

    return(
             <>
             <TextField 
                    style={{background:'rgb(233, 233, 233)', borderRadius:"100px"}}
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        onKeyDown={handleKeyDown}
                        placeholder="Введите текст" 
                        variant="outlined" 
                        error='err'
                        fullWidth 
                        InputProps={{
                        }}
                        sx={{ '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'transparent', 
                                borderRadius:'100px', // Убираем стандартный цвет границы
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--orange-color)', // Измените цвет границы при наведении
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--orange-color)', // Измените цвет границы при фокусе
                            },
                        }}}
                    />
                    <IconButton onClick={handleAddTask}> 
                        <AddIcon sx={{color:props.toggleStyle}}/>
                    </IconButton>
                    </>
                    )
            };
            export default TaskInput;