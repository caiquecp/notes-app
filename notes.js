const _ = require('lodash');

var notes = [{title: 'Abc', description: 'A-b-c...'}];

var add = function (title, description) {
    console.log('Adding note', title, description);
    notes.push({
        title,
        description
    });
}

var getAll = function () {
    console.log('Reading all notes');
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i]
        console.log('Note ' + (i + 1), note.title, note.description);
    }
}

var get = function (title) {
    console.log('Reading note ' + title);
}

var remove = function (title) {
    console.log('Removing note ' + title);
}

module.exports = {
    add,
    getAll,
    get,
    remove
}