const router = require('express').Router();
const { notes } = require('../../db/db');
const path = require('path');
const createNewNote = require('../../lib');

router.get('/notes', (req, res) => {
    res.json(notes);
    console.log(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    // res.send('Delete request to the homepage')
    console.log('You are deleting something');
});

module.exports = router;