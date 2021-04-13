const router = require('express').Router();
const { notes } = require('../../db/db');
const path = require('path');

router.get('/notes', (req, res) => {
    res.json(notes);
});

module.exports = router;