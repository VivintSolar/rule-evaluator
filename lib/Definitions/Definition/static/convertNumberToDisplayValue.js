

const measurementConverter = require('../../../Measurements');
const { roundTo } = require('../../../utilities/util');

// convertNumberToDisplayValue
module.exports = ( value, template, options ) => {
    const { displayUnitsAs, units } = template||{}
    const { roundTo: digits } = options||{};
    const convertedValue = measurementConverter.reconstruct( value, units, displayUnitsAs );
    return roundTo( convertedValue, digits );
};
