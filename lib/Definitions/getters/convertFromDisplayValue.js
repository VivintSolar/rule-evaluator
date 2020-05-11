

//definitions.convertFromDisplayValue
module.exports = (function( definitionId, value ){
    const definition = this.getDefinitions( definitionId );
    return definition.convertFromDisplayValue( value );
});