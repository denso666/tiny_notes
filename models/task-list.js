const Task = require("./task");

class TaskList {
    
    constructor ( list = {} ) {
        this._list = list;
    }

    get listArray () {
        const list = [];

        Object.keys(this._list).forEach( (key, i) => {
            const task = this._list[key];
            list.push(task);
        } );

        return list;
    }

    getTasks () {
        console.log('tasks');
    }

    insertTask ( note ) {
        const task = new Task(note);
        this._list[task.id] = task;
    }

}

module.exports = TaskList;