const fs = require('fs');
const os = require('os');

var addNote = function (title, description) {
    const userInfo = os.userInfo();

    var content = `${description}${os.EOL}Note created by ${userInfo.username}.`;
    var file = `${title}.txt`;

    fs.appendFile(file, content, (err) => {
        if (err) {
            throw err;
        }
    });
}

module.exports.addNote = addNote;