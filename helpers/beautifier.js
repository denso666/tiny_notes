
const prettyArray = ( list ) => {
    
    const newList = [];

    if ( list.length ) {
        list.forEach( (note, i) => {
            newList.push(`  ${((i+1)+'.').toString().blue} ${note.note} :: ${(note.completed_at)? 'done'.green: 'pending'.red}`);
        });
    }
}

const prettylist = ( list ) => {
    
    if ( list.length ) {
        list.forEach( (note, i) => {
            console.log(`  ${((i+1)+'.').toString().blue} ${note.note} :: ${(note.completed_at)? 'done'.green: 'pending'.red}`)
        });
    }
    else console.log('   The list is empty'.red);

}


module.exports = {
    prettyArray,
    prettylist
}