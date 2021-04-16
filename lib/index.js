const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArray) => {
    const note = {
        title: body.title,
        text: body.text,
        id: body.id
    };
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
};

module.exports = createNewNote;