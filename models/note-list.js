const Note = require("./note");

class NotesList {
    
    constructor ( list = [] ) {
        this._list = {};

        list.forEach( note => {
            this._list[note.id] = note;
        } );
    }

    get listArray () {
        const list = [];

        Object.keys(this._list).forEach( key => {
            const note = this._list[key];
            list.push(note);
        } );

        return list;
    }

    get listArrayCompleted () {
        const list = [];

        Object.keys(this._list).forEach( key => {
            const note = this._list[key];
            if ( note.completed_at ) list.push(note);
        } );

        return list;
    }

    get listArrayNotCopleted () {
        const list = [];

        Object.keys(this._list).forEach( key => {
            const note = this._list[key];
            if ( !note.completed_at ) list.push(note);
        } );

        return list;
    }

    insertNote ( text ) {
        let note = new Note( text );
        this._list[note.id] = note;
    }

    deleteNotes ( indexes ) {
        indexes.forEach( id => delete this._list[id] );
    }

    toggleDone ( indexes ) {
        const current = new Date();
        const date = `${current.getFullYear()}/${current.getMonth()}/${current.getDay()}`;

        indexes.forEach( id => {
            this._list[id] = {...this._list[id], completed_at: date }
        } );
    }
}

module.exports = NotesList;