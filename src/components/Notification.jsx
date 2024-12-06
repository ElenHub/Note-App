import React, { useState, useEffect } from 'react';
import '../styles/Notification.css'; // Добавьте стили для уведомлений

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Закрыть уведомление через 3 секунды
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification">
      {message}
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default Notification