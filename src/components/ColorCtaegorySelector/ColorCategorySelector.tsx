import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Button, Popover } from "@mui/material";
import { styled } from '@mui/material/styles';
import { SketchPicker } from 'react-color';

// Определите стилизованный компонент Select
const CustomSelect = styled(Select)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: '#333'
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ccc',
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: '#888',
  },
  '& .MuiSelect-select:focus': {
    borderColor: '#56B5A0',
  },
}))


const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

export const categories = {
  work: { name: "Job", color: "#56B5A0" },
  personal: { name: "Personal", color: "#DED16F" },
  shopping: { name: "Purchases", color: "#73BAE0" },
  urgent: { name: "Urgently", color: "#E37173" },
};

const CategoryColorSelector = ({ category, setColor, setCategory, setFontColor, fontColor,  isEditMode, toggleStyle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    // setColor(categories[selectedCategory].color); // Устанавливаем цвет категории
    if (categories[selectedCategory]) {
      setColor(categories[selectedCategory].color); // Устанавливаем цвет категории
    } else {
      console.error("Selected category does not exist:", selectedCategory);
    }
  };
  return (
    <div>
      <FormControl variant="outlined" fullWidth >
         <CustomSelect
          sx={{borderRadius:'30px', backgroundColor: toggleStyle.iconHover.backgroundColor, color: toggleStyle.iconColor}} 
          labelId="category-select-label"
          value={category}
          onChange={handleCategoryChange} 
          displayEmpty
          renderValue={(selected) => {
            if (selected && categories[selected]) {
              return categories[selected].name; // Показываем имя выбранной категории
            }
            return isEditMode ? "Change category" : "Select category"; // Начальный текст
          }}
        >
          {Object.keys(categories).map((key) => (
            <CustomMenuItem key={key} value={key} style={{ color: categories[key].color }}>
              {categories[key].name}
            </CustomMenuItem>
          ))}
        </CustomSelect> 
      </FormControl>
      <div style={{ marginTop: '20px' }}>
        <Button sx={{borderRadius:'30px', backgroundColor: toggleStyle.iconHover.backgroundColor, color: toggleStyle.iconColor}} variant="contained" color="primary" onClick={handleClick}>
          Select Color
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        
        >
          <SketchPicker
            color={fontColor}
            onChangeComplete={(color) => setFontColor(color.hex)}
          />
        </Popover>
      </div>
    </div>
  );
};

export default CategoryColorSelector;
