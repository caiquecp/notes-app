'use strict'

const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];

var printNote = function (note) {
    console.log('* Note');
    console.log('Title:', note.title);
    console.log('Description:', note.description);
}

if (command == 'add') {
    notes.add(argv.title, argv.description);
    console.log('Note added');
} else if (command == 'list') {
    const listOfNotes = notes.getAll();
    for (let i = 0; i < listOfNotes.length; i++) {
        printNote(listOfNotes[i]);
    }
} else if (command == 'remove') {
    const wasRemoved = notes.remove(argv.title);
    if (wasRemoved) {
        console.log('Note removed');
    } else {
        console.log('Note not found');
    }
} else if (command == 'read') {
    const requestedNote = notes.get(argv.title);
    if (requestedNote === undefined) {
        console.log('Note not found');
    } else {
        printNote(requestedNote);
    }
} else {
    console.log('Command not recognized');
}