const inquirer = require("inquirer");
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'Select an option',
        choices: [
            { value:'1', name:`${'1.'.green} New note` },
            { value:'2', name:`${'2.'.green} Notes` },
            { value:'3', name:`${'3.'.green} Completed` },
            { value:'4', name:`${'4.'.green} Pending` },
            { value:'5', name:`${'5.'.green} Complete note(s)` },
            { value:'6', name:`${'6.'.green} Delete note(s)` },
            { value:'0', name:`${'0.'.green} Go out` }
        ]
    }
];

const mainMenu = async () => {

    console.clear();
    console.log('\n  -> τiny notεs\n'.magenta);

    const { option } = await inquirer.prompt(menuOpts);
    return option;
}

const pause = async () => {
    const pauseOpts = [
        {
            type: 'input',
            name: 'option',
            message: 'Press any key to continue...'
        }
    ];
    await inquirer.prompt(pauseOpts);
}

const addNote = async ( message ) => {
    const noteOpts = [
        {
            type: 'input',
            name: 'note',
            message,
            validate( value ) {
                if ( !value.length ) {
                    return 'Please write a thing'.red;
                }
                return true;
            }
        }
    ];

    const { note } = await inquirer.prompt(noteOpts);
    return note;
}

const deleteNotes = async ( list ) => {

    const deleteOpts = [
        {
            type: 'checkbox',
            name: 'indexes',
            message: 'Select notes: ',
            choices: []
        }
    ];

    list.forEach( (n, i) => {
        deleteOpts[0].choices.push(
            {value: n.id, name: `${((i+1).toString()+'.').green} ${n.note}`}
        )
    });

    const { indexes } = await inquirer.prompt(deleteOpts);
    return indexes;
}

const completeNotes = async ( list ) => {
    const completeOpts = [
        {
            type: 'checkbox',
            name: 'indexes',
            message: 'Select notes: ',
            choices: []
        }
    ];

    list.forEach( (n, i) => {
        completeOpts[0].choices.push(
            {value: n.id, name: `${((i+1).toString()+'.').green} ${n.note}`}
        )
    });

    const { indexes } = await inquirer.prompt( completeOpts );
    return indexes;
}

module.exports = {
    mainMenu,
    pause,
    addNote,
    deleteNotes,
    completeNotes
}