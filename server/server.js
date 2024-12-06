const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let notes = [];
let tasks = [];

// Заметки API
app.post('/api/notes', (req, res) => {
    const note = { id: Date.now().toString(), ...req.body };
    notes.push(note);
    res.status(201).json(note);
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === req.params.id);
    if (note) {
        res.json(note);
    } else {
        res.status(404).send('Note not found');
    }
});

app.put('/api/notes/:id', (req, res) => {
    const index = notes.findIndex(n => n.id === req.params.id);
    if (index !== -1) {
        notes[index] = { ...notes[index], ...req.body };
        res.json(notes[index]);
    } else {
        res.status(404).send('Note not found');
    }
});

app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(n => n.id !== req.params.id);
    res.status(204).end();
});

// Задачи API
app.post('/api/tasks', (req, res) => {
    const task = { id: Date.now().toString(), ...req.body };
    tasks.push(task);
    res.status(201).json(task);
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

app.put('/api/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        res.json(tasks[index]);
    } else {
        res.status(404).send('Task not found');
    }
});

app.delete('/api/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
