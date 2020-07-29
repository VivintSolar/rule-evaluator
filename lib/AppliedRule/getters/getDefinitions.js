

//getDefinitions
module.exports = (function( singleStringOrMultipleAsArray ){
    if(this.definitions && this.definitions.getDefinitions ){
        return this.definitions.getDefinitions( singleStringOrMultipleAsArray )
    }
    throw new Error(`No definitions found on Applied Rule`);
});
