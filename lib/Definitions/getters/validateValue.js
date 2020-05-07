

// definitions.validateValue
module.exports = (function( definitionId, value ){
    const definition = this.getDefinitions( definitionId );
    return definition.validateValue( value );
});