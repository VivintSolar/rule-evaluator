

const MC = require('../../../Measurements');
const { roundTo } = require('../../../utilities/util');

// convertNumberToDisplayValue
module.exports = ( value, template, options ) => {
    const { displayUnitsAs, units } = template||{}
    const { roundTo: digits } = options||{};
    const getConvertedValue = () => {
        if( !displayUnitsAs ) return value;
        return MC[ units ].to[ displayUnitsAs ]( value );
    }
    const convertedValue = getConvertedValue();
    return roundTo( convertedValue, digits );
};
