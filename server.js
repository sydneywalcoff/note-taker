const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});