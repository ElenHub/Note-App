"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var md_1 = require("react-icons/md");
require("./Search.module.css");
var Search = function (props) {
    var handleInputChange = function (event) {
        var value = event.target.value; // Это значение, введенное пользователем в поле
        props.setSearchTerm(value); // Обновляет состояние `searchTerm` в родительском компоненте
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(233, 233, 233)',
            borderRadius: '100px'
        }, children: (0, jsx_runtime_1.jsx)(material_1.TextField, { variant: "outlined", placeholder: 'Search for notes', onChange: handleInputChange, InputProps: {
                startAdornment: ((0, jsx_runtime_1.jsxs)(material_1.InputAdornment, { position: "start", children: [(0, jsx_runtime_1.jsx)(md_1.MdSearch, { size: '1.3rem' }), " "] })),
                sx: {
                    '& .MuiInputBase-input::placeholder': {
                        opacity: 1,
                    },
                },
            }, sx: {
                width: '100%', // Можно настроить ширину по необходимости
                '& .MuiOutlinedInput-root': {
                    borderRadius: '100px', // Закругление углов
                    '& fieldset': {
                        borderColor: props.toggleStyle.iconColor, // Устанавливаем цвет рамки
                    },
                    '&:hover fieldset': {
                        borderColor: props.toggleStyle.iconColor, // Цвет рамки при наведении
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: props.toggleStyle.iconColor, // Цвет рамки при фокусе
                    },
                },
            } }) }));
};
exports.default = Search;
