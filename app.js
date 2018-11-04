'use strict'

const notes = require('./notes.js');
const yargs = require('yargs');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const descriptionOptions = {
    describe: 'Description of note',
    demand: true,
    alias: 'd'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        description: descriptionOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

const command = argv._[0];

var printNote = function (note) {
    console.log('-------------------------');
    console.log('Title:', note.title);
    console.log('Description:', note.description);
}

if (command == 'add') {
    notes.add(argv.title, argv.description);
    console.log('Note added');
} else if (command == 'list') {
    const listOfNotes = notes.getAll();
    console.log(`Printing ${listOfNotes.length} note(s)`);
    listOfNotes.forEach((value) => printNote(value));
} else if (command == 'read') {
    const requestedNote = notes.get(argv.title);
    if (requestedNote === undefined) {
        console.log('Note not found');
    } else {
        console.log('Printing note');
        printNote(requestedNote);
    }
} else if (command == 'remove') {
    const wasRemoved = notes.remove(argv.title);
    wasRemoved ? console.log('Note removed') : console.log('Note not found');
} else {
    console.log('Command not recognized');
}