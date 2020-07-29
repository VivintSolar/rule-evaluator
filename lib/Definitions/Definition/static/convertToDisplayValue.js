
const swapReferenceIds = require('../../../utilities/swapReferenceIds');
const convertNumberToDisplayValue = require('./convertNumberToDisplayValue');
const convertObjectToDisplayValue = require('./convertObjectToDisplayValue');

module.exports = ( value, template ) => {
    const { dataType } = template||{};
    if( value === undefined || value === null ) return null;
    if( dataType === 'number' ){
        value = convertNumberToDisplayValue( value, template );
    } else if( dataType === 'object' ){
        value = convertObjectToDisplayValue( value, template );
    } else {
        value = swapReferenceIds( value, template, true );
    }
    return value;
};
