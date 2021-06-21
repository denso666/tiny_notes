const fs = require('fs');
const PATH='./data/notes.json';

const save = ( data ) => {
    fs.writeFileSync(PATH, JSON.stringify(data,null,'\t'));
}

const load = () => {
    try {
        const data = fs.readFileSync(PATH);
        return JSON.parse( data );
    } catch (e) {
        return [];
    }
}

module.exports = {
    save, load
}