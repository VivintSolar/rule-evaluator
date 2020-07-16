




//matchElements
module.exports = (function( match ){
    return Object.values( this.tree )
        .filter( element => Object.keys(match).every( key => element[key] === match[key]) )
});
