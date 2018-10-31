const fs = require('fs');
const os = require('os');
const _ = require('lodash');

var addNote = function (title, description) {
    var file = `note-${_.random(0, 999999)}.md`;
    var content = `# ${title}${os.EOL}${description}`;

    fs.appendFile(file, content, (err) => {
        if (err) {
            throw err;
        }
    });
}

module.exports.addNote = addNote;