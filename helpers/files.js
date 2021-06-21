const fs = require('fs');
const PATH='./data/notes.json';

const save = ( data ) => {
    fs.writeFileSync(PATH, JSON.stringify(data,null,'\t'));
}

module.exports = {
    save
}