const { v4: uuid } = require('uuid');

class Note {

    constructor (note) {
        this.id = uuid();
        this.note = note;
        this.completed_at = null;
    }
}

module.exports = Note;