

const MC = require('../../Measurements');

module.exports = (function(units, displayUnitsAs, value){
    if( !displayUnitsAs ) return value;
    return MC[ units ].to[ displayUnitsAs ]( value );
});