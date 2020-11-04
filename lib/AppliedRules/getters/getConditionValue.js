const measurements = require('../../Measurements');

const getUnitsOfInputValue = conditionDefinition => ((conditionDefinition.options||{}).units);

const toRawValueConversionRequired = conditionDefinition => (
    conditionDefinition.units && getUnitsOfInputValue( conditionDefinition ) && conditionDefinition.units !== getUnitsOfInputValue( conditionDefinition )
)


//getConditionValue
module.exports = (function(conditionId, toDisplayValue){
    const conditionDefinition = this.getDefinitions( conditionId )||{};
    if( !conditionDefinition ) return this.conditions[ conditionId ];
    let rawValue = this.conditions[ conditionId ];
    if( toRawValueConversionRequired( conditionDefinition ) ){
        try{
            rawValue = measurements.convert( rawValue, conditionDefinition.units, getUnitsOfInputValue( conditionDefinition ));
        }catch( error ){
            throw error;
        }
    }

    if( toDisplayValue ) return conditionDefinition.convertToDisplayValue( rawValue )
    return rawValue;
});
