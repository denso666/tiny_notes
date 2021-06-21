
const prettylist = ( list ) => {
    
    if ( list.length ) {
        list.forEach( (note, i) => {
            console.log(`  ${((i+1)+'.').toString().blue} ${note.note} :: ${(note.completed_at)? ('done|'+note.completed_at).green: 'pending'.red}`)
        });
    }
    else console.log('   The list is empty'.red);

}


module.exports = {
    prettylist
}