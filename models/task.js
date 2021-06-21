const { v4: uuid } = require('uuid');

class Task {

    constructor (note) {
        this.id = uuid();
        this.note = note;
        this.completed_at = null;
    }

    complete () {
        const current = new Date();
        this.completed_at = `${current.getFullYear()}/${current.getMonth()}/${current.getDay()}`;
    }

}

module.exports = Task;