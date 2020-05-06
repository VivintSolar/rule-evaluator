
//definition.toRawDefinitions
module.exports = (function( ){
    let definitions = {};
    if( this.rules ) {
        definitions.rules ={};
        Object.values(  this.rules ).map( ruleDefinition => {
            definitions.rules[ ruleDefinition.id ] = (
                ruleDefinition.toRawDefinition ? ruleDefinition.toRawDefinition() : ruleDefinition
            );
        });
    }
    if( this.conditions ) {
        definitions.conditions ={};
        Object.values(  this.conditions ).map( conditionDefinition => {
            definitions.conditions[ conditionDefinition.id ] = (
                conditionDefinition.toRawDefinition ? conditionDefinition.toRawDefinition() : conditionDefinition
            );
        })
    }
    return definitions;
});