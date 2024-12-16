"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
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
var react_1 = require("react");
var material_1 = require("@mui/material");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var TaskInput = function (props) {
    var _a = (0, react_1.useState)(''), title = _a[0], setTitle = _a[1];
    var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
    var handleKeyDown = function (e) {
        if (e.key === "Enter" && title.trim()) {
            props.addTask(title);
            setTitle('');
        }
    };
    var handleAddTask = function () {
        if (title.trim()) {
            props.addTask(title);
            setTitle("");
        }
        else {
            setError('Title is required');
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { style: { background: 'rgb(233, 233, 233)', borderRadius: "100px" }, value: title, onChange: function (e) { return setTitle(e.target.value); }, onKeyDown: handleKeyDown, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442", variant: "outlined", error: !!error, helperText: error, fullWidth: true, InputProps: {}, sx: { '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'transparent',
                            borderRadius: '100px', // Убираем стандартный цвет границы
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--orange-color)', // Измените цвет границы при наведении
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'var(--orange-color)', // Измените цвет границы при фокусе
                        },
                    } } }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { onClick: handleAddTask, children: (0, jsx_runtime_1.jsx)(Add_1.default, { sx: { color: props.toggleStyle } }) })] }));
};
exports.default = TaskInput;
