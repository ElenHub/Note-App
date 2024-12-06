const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const notesRouter = require('./api/notes');
const tasksRouter = require('./api/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Используем маршруты для заметок и задач
app.use('/api/notes', notesRouter);
app.use('/api/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
