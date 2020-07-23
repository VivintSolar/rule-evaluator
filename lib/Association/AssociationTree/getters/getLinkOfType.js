



//getLinkOfType
module.exports = (function( type ){
    return Object.values( this.tree )
        .filter( element => element.ancestors && element.type === type )
});
