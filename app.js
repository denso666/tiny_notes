const { mainMenu, pause, addNote, deleteNotes, completeNotes } = require('./helpers/inquirer');

const { save, load } = require('./helpers/files');
const { prettylist } = require('./helpers/beautifier');

const NotesList = require('./models/note-list');

const main = async () => {

    let opt = '';

    // initilize list with saved notes
    const container = new NotesList( load() );

    do {

        opt = await mainMenu();
        
        switch ( opt ) {
            case '1':
                let note = await addNote("Note: ");
                container.insertNote( note );
                save( container.listArray )
            break;
            
            case '2':
                prettylist( container.listArray );
            break;
            
            case '3':
                prettylist( container.listArrayCompleted );
            break;
            
            case '4':
                prettylist( container.listArrayNotCopleted );
            break;

            case '5':
                const update_index = await completeNotes( container.listArrayNotCopleted );
                container.toggleDone( update_index );
                save( container.listArray );
            break;

            case '6':
                const delete_index = await deleteNotes( container.listArray );
                container.deleteNotes( delete_index );
                save( container.listArray );
            break;
        }

        console.log('\n');
        await pause();

    } while( opt !== '0' )
    
}

main();