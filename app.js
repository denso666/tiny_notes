const { mainMenu, pause, addTask } = require('./helpers/inquirer');

const TaskList = require('./models/task-list');
const Task = require('./models/task');
const { save } = require('./helpers/files');

const main = async () => {

    let opt = '';
    const container = new TaskList();

    do {

        opt = await mainMenu();
        
        switch ( opt ) {
            case '1':
                let note = await addTask("Note: ");
                container.insertTask( note );
                save(container.listArray)
            break;
            case '2':
                console.log( container.listArray );
            break;
        }


        await pause();

    } while( opt !== '0' )
    

}

main();