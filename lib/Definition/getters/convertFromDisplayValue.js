
const swapReferenceIds = require('../../utilities/swapReferenceIds');
const MC = require('../../Measurements');

const convertNumberValue = (units, displayUnitsAs, value) => {
    if( !displayUnitsAs ) return value;
    return MC[ units ].to[ displayUnitsAs ]( value );
};

module.exports = (function( value ){
    if( this.dataType === 'number' ){
        value = convertNumberValue(this.units, this.displayUnitsAs, value);
    } else {
        value = swapReferenceIds( value );
    }
    return value;
});