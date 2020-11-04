

//updateOptions
module.exports = (function(updateObject, definitionId){
    if( definitionId ){
        if( !this.options.byId ) this.options.byId = {};
        const definitionOptions = Object.assign({}, this.options.byId[ definitionId ]||{}, updateObject);
        this.updateDefinition({ options: definitionOptions }, definitionId);
        this.options.byId = Object.assign({}, this.options.byId, { [ definitionId ]: definitionOptions } )
    } else {
        this.options = Object.assign({}, this.options, updateObject )
    }
})
