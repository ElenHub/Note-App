import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField, Box, Button } from '@mui/material';
import dayjs from 'dayjs';

export const DateTimeSelector = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs());

    const handleDateTimeChange = (newValue) => {
        setSelectedDateTime(newValue);
    };

    const handleSubmit = () => {
        // Обработка выбранной даты и времени
        console.log("Выбранная дата и время:", selectedDateTime.format());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: '0 auto' }}>
                <DateTimePicker
                    label="Выберите дату и время"
                    value={selectedDateTime}
                    onChange={handleDateTimeChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <Button variant="contained" onClick={handleSubmit}>
                    Подтвердить
                </Button>
            </Box>
        </LocalizationProvider>
    );
};

 
