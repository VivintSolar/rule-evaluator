const measurements = require('../../Measurements');
const { isObject } = require('../../utilities/util');

const getUnitsOfInputValue = conditionDefinition => ((conditionDefinition.options||{}).units);

const toRawValueConversionRequired = conditionDefinition => (
    conditionDefinition.units && getUnitsOfInputValue( conditionDefinition ) && conditionDefinition.units !== getUnitsOfInputValue( conditionDefinition )
)


//getConditionValue
module.exports = (function(_definitionId, toDisplayValue){
    const definition = isObject( _definitionId ) ? _definitionId : this.getDefinitions( _definitionId )||{};
    if( !definition ) return (this.conditions||{})[ _definitionId ];
    let rawValue = (this.conditions||{})[ definition.id ];
    if( toRawValueConversionRequired( definition ) ){
        const unitsOfInputValue = getUnitsOfInputValue( definition )
        try{
            // const valueObjects = measurements.deconstruct( rawValue, unitsOfInputValue, unitsOfInputValue);
            // rawValue = measurements.construct( valueObjects, definition.units)
            rawValue = measurements.reconstruct( rawValue, unitsOfInputValue, definition.units )
        }catch( error ){
            throw error;
        }
    }

    if( toDisplayValue ) {
        if( typeof toDisplayValue === "boolean" ) return definition.convertToDisplayValue( rawValue )
        if( isObject( toDisplayValue ) ) return definition.convertToDisplayValue( rawValue, toDisplayValue )
    }
    return rawValue;
});
