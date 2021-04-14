const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArray) => {
    const note = {
        title: body.title,
        body: body.body,
        id: body.id
        // body:
    };
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
};

module.exports = createNewNote;