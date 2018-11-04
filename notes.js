'use strict'

const _ = require('lodash');
const fs = require('fs');
const config = require('./config.js');

var add = function (title, description) {
    const notes = fetchNotes();

    const duplicatedNotes = notes.filter((n) => n.title == title); 
    if (duplicatedNotes.length > 0) {
        throw new Error('There\'s a note with the same title');
    }

    const note = {
        title,
        description
    };

    notes.push(note);
    saveNotes(notes);
}

var getAll = function () {
    return fetchNotes();
}

var get = function (title) {
    const notes = fetchNotes();
    return notes.filter((n) => n.title == title)[0];
}

var remove = function (title) {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((n) => n.title != title);
    const hasNotesChanged = notes.length != filteredNotes.length;
    
    if (hasNotesChanged) {
        saveNotes(filteredNotes);
    }

    return hasNotesChanged;
}

var saveNotes = function (notes) {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync(config.notesFile, notesString);
}

var fetchNotes = function () {
    try {
        const notesString = fs.readFileSync(config.notesFile, config.encoding);
        return JSON.parse(notesString);
    } catch (err) {
        if (err.code == "ENOENT") { // file doesn't exists
            return [];
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