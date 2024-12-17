import { body, validationResult } from 'express-validator';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet'; 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet()); 
app.use(bodyParser.json());

let notes = [];
let tasks = [];


app.get('/', (req, res) => {
    res.send('Welcome to the API!'); // Сообщение для корневого пути
});
// Заметки API
// app.post('/api/notes', (req, res) => {
//     const note = { id: Date.now().toString(), ...req.body };
//     console.log(req.body)
//     notes.push(note);
//     res.status(201).json({ message: 'Заметка добавлена!', note });
// });

app.post('/api/notes', 
    body('title').notEmpty().withMessage('Title is required'),
    body('details').notEmpty().withMessage('Details are required'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const note = { id: Date.now().toString(), ...req.body };
    notes.push(note);
    res.status(201).json(note);
    }
);


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

app.patch('/api/tasks/:id', (req, res) => {
    console.log(`Updating task with ID: ${req.params.id}`);
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index !== -1) {
        tasks[index].isDone = req.body.isDone;
        res.json(tasks[index]);
    } else {
        res.status(404).send('Task not found');
    }
});

app.delete('/api/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.status(204).end();
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Что-то пошло не так!');
});


// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} request для '${req.url}'`);
    next();
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
// Обратная связь API
app.post('/api/feedback', (req, res) => {
    const feedback = req.body;
    // Здесь вы можете обработать обратную связь (например, сохранить в базе данных или отправить на почту)
    console.log('Feedback received:', feedback);
    res.status(201).json({ message: 'Спасибо за ваш отзыв!' });
});
