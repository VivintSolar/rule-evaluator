
const swapReferenceIds = require('../../../utilities/swapReferenceIds');
const { getMMDDYYYY } = require('../../../utilities/util');
const convertNumberToDisplayValue = require('./convertNumberToDisplayValue');
const convertObjectToDisplayValue = require('./convertObjectToDisplayValue');

module.exports = ( value, template ) => {
    const { dataType } = template||{};
    if( value === undefined || value === null ) return null;
    if( dataType === 'number' ){
        value = convertNumberToDisplayValue( value, template );
    } else if( dataType === 'object' ){
        value = convertObjectToDisplayValue( value, template );
    } else if( dataType === 'date' ){
        value = getMMDDYYYY( value );
    } else {
        value = swapReferenceIds( value, template, true );
    }
    return value;
};
