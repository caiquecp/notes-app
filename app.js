'use strict'

const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
console.debug(argv);

var command = argv._[0];

if (command == 'add') {
    notes.add(argv.title, argv.description);
} else if (command == 'list') {
    notes.getAll();
} else if (command == 'remove') {
    notes.remove(argv.title);
} else if (command == 'read') {
    notes.get(argv.title);
} else {
    console.log('Command not recognized');
}