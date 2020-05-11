
const swapReferenceIds = require('../../utilities/swapReferenceIds');

module.exports = (function( value ){
    if( value === undefined || value === null ) return null;
    if( this.dataType === 'number' ){
        value = this.convertNumberToDisplayValue( value );
    } else {
        value = swapReferenceIds( value, true );
    }
    return value;
});