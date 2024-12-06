const express = require('express');
const router = express.Router();

let notes = [];

// Заметки API
router.post('/', (req, res) => {
    const note = { id: Date.now().toString(), ...req.body };
    notes.push(note);
    res.status(201).json(note);
});

router.get('/', (req, res) => {
    res.json(notes);
});

router.get('/:id', (req, res) => {
    const note = notes.find(n => n.id === req.params.id);
    if (note) {
        res.json(note);
    } else {
        res.status(404).send('Note not found');
    }
});

router.put('/:id', (req, res) => {
    const index = notes.findIndex(n => n.id === req.params.id);
    if (index !== -1) {
        notes[index] = { ...notes[index], ...req.body };
        res.json(notes[index]);
    } else {
        res.status(404).send('Note not found');
    }
});

router.delete('/:id', (req, res) => {
    notes = notes.filter(n => n.id !== req.params.id);
    res.status(204).end();
});

module.exports = router;
