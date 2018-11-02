'use strict'

const _ = require('lodash');
const fs = require('fs');

const file = 'notes.json';
const encode = 'utf8';

var add = function (title, description) {
    var note = {
        title,
        description
    };

    var notes = readJSON();

    var duplicatedNotes = notes.filter((n) => n.title == title); 
    if (duplicatedNotes.length > 0) {
        throw new Error('There\'s a note with the same title');
    }

    notes.push(note);
    writeToJSON(notes);
}

var getAll = function () {
    const notes = readJSON();
    for (var i = 0; i < notes.length; i++) {
        let note = notes[i]
        console.log('Note ' + (i + 1), note.title, note.description);
    }
}

var get = function (title) {
    const notes = readJSON();
    const note = notes.filter((n) => n.title == title)[0];
    if (note !== undefined) {
        console.log('Note ', note.title, note.description);
    }
}

var remove = function (title) {
    console.log('Removing note ' + title);
}

function writeToJSON (notes) {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync(file, notesString);
}

function readJSON () {
    try {
        const notesString = fs.readFileSync(file, encode);
        return JSON.parse(notesString);
    } catch (err) {
        if (err.code == "ENOENT") { // file doesn't exists
            var notes = [];
            writeToJSON(notes);
            return notes;
        } else {
            throw err;
        }
    }
}

module.exports = {
    add,
    getAll,
    get,
    remove
}