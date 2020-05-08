

// definitions.convertToDisplayValue
module.exports = (function(definitionId, value){
    const definition = this.getDefinitions( definitionId );
    return definition.convertToDisplayValue( value );
});