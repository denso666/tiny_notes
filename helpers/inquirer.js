const inquirer = require("inquirer");
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'Select an option',
        choices: [
            { value:'1', name:`${'1.'.green} New task` },
            { value:'2', name:`${'2.'.green} Show all` },
            { value:'3', name:`${'3.'.green} Show completed` },
            { value:'4', name:`${'4.'.green} Show pendients` },
            { value:'5', name:`${'5.'.green} Complete task(s)` },
            { value:'6', name:`${'6.'.green} Delete task` },
            { value:'0', name:`${'0.'.green} Go out` }
        ]
    }
];

const mainMenu = async () => {

    console.clear();
    console.log('======================'.green);
    console.log('   Select an option'.green);
    console.log('======================\n'.green);

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

const addTask = async ( message ) => {
    const taskOptions = [
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

    const { note } = await inquirer.prompt(taskOptions);
    return note;
}


module.exports = {
    mainMenu,
    pause,
    addTask
}