

const MC = require('../../Measurements');

module.exports = (function( value ){
    if( !this.displayUnitsAs ) return value;
    return MC[ this.units ].to[ this.displayUnitsAs ]( value );
});