import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const TimeNotification = () => {
    const [selectedTime, setSelectedTime] = useState('');
    const [isNotified, setIsNotified] = useState(false); // Для предотвращения повторных уведомлений

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        setIsNotified(false); // Сбросить уведомление при изменении времени
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = dayjs();
            const chosenTime = dayjs().hour(selectedTime.split(':')[0]).minute(selectedTime.split(':')[1]).second(0);

            if (now.isSame(chosenTime, 'minute') && !isNotified) {
                toast.success('Время пришло! Уведомление!', {
                    autoClose: 5000,
                });
                setIsNotified(true); // Уведомление отправлено
            } else if (!now.isSame(chosenTime, 'minute')) {
                setIsNotified(false); // Сбросить флаг, если время изменилось
            }
        }, 60000); // Проверяем каждую минуту

        return () => clearInterval(interval); // Очистка интервала при размонтировании
    }, [selectedTime, isNotified]);

    return (
        <div>
            <h2>Выберите время для уведомления:</h2>
            <input
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
            />
            <ToastContainer />
        </div>
    );
};

export default TimeNotification;
