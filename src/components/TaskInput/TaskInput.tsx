
// import React, { useState } from 'react';
// import { TextField, IconButton, Box } from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';
// import useTasks from '../../hooks/useTasks';

// const TaskInput = (props) => {
//     const [title, setTitle] = useState('');
//     const [dueDate, setDueDate] = useState('');
//     const { createTask } = useTasks();
//     const { selectedDate, toggleStyle } = props; 

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter" && title.trim()) {
//             handleAddTask();
//         }
//     };

//     const handleAddTask = () => {
//         if (title.trim()) { 
//             createTask({ title, date: dueDate || selectedDate.format('YYYY-MM-DD') });
//             setTitle('');
//             setDueDate(''); 
//         }
//     };

//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <TextField 
//                 style={{ background: 'rgb(233, 233, 233)', borderRadius: "100px" }}
//                 value={title} 
//                 onChange={(e) => setTitle(e.target.value)} 
//                 onKeyDown={handleKeyDown}
//                 placeholder="Введите текст задачи" 
//                 variant="outlined" 
//                 fullWidth 
//                 sx={{ 
//                     '& .MuiOutlinedInput-root': {
//                         '& fieldset': {
//                             borderColor: 'transparent', 
//                             borderRadius: '100px',
//                         },
//                         '&:hover fieldset': {
//                             borderColor: 'var(--orange-color)', 
//                         },
//                         '&.Mui-focused fieldset': {
//                             borderColor: 'var(--orange-color)', 
//                         },
//                     }
//                 }}
//             />
//             <TextField 
//                 type="date" 
//                 value={dueDate} 
//                 onChange={(e) => setDueDate(e.target.value)} 
//                 sx={{ 
//                     '& .MuiOutlinedInput-root': {
//                         '& fieldset': {
//                             borderColor: 'transparent', 
//                         },
//                         '&:hover fieldset': {
//                             borderColor: 'var(--orange-color)', 
//                         },
//                         '&.Mui-focused fieldset': {
//                             borderColor: 'var(--orange-color)', 
//                         },
//                     }
//                 }}
//             />
//             <IconButton onClick={handleAddTask}> 
//                 <AddIcon sx={{ color: toggleStyle }} />
//             </IconButton>
//         </Box>
//     );
// };

// export default TaskInput;
import React, { useState } from 'react';
import { TextField, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
             
             
const TaskInput = (props) => {
    const [title, setTitle] = useState('');
    const [error, setError]=useState<string|null>(null)

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && title.trim()) {
            props.addTask(title); 
            setTitle('');
          
        }
    };
    const handleAddTask = () => {
        if(title.trim()){
            props.addTask(title);
            setTitle("");
            }else{
              setError('Title is required')
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
                        error={!!error}
                        helperText={error}
                        fullWidth 
                        InputProps={{
                        }}
                        sx={{  '& .MuiOutlinedInput-root': {
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