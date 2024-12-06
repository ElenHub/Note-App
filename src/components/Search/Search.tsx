import React from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { MdSearch } from 'react-icons/md';
import './Search.module.css';

interface SearchProps {
  // setSearchTerm: (term: string) => void; // Функция для обновления состояния поиска
  toggleStyle: {
    iconColor: string; // Цвет иконки
  };
}

const Search: React.FC<SearchProps> = (props) => {
  const handleInputChange = (event) => {
    const value = event.target.value; // Это значение, введенное пользователем в поле
    props.setSearchTerm(value); // Обновляет состояние `searchTerm` в родительском компоненте
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
   backgroundColor: 'rgb(233, 233, 233)',
   borderRadius:'100px'
      }}
    >
      <TextField
        variant="outlined"
        placeholder='Search for notes'
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdSearch size='1.3rem'  /> {/* Устанавливаем цвет иконки */}
            </InputAdornment>
          ),
          sx: {
            '& .MuiInputBase-input::placeholder': {
              opacity: 1, 
            },
          },
        }}
        sx={{
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
        }}
      />
    </Box>
  );
};

export default Search;

