'use strict'

const fs = require('fs');

const file = 'notes.json';

var originalNote = {
    title: 'Some title',
    description: 'Some description'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync(file, originalNoteString);

var noteString = fs.readFileSync(file, 'utf8');
var ourOldOriginalNote = JSON.parse(noteString);

console.log('noteString:', noteString);
console.log('ourOldOriginalNote:', ourOldOriginalNote);