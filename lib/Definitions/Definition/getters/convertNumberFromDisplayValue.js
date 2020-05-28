

const MC = require('../../../Measurements');

module.exports = (function( value ){
    if( !this.displayUnitsAs ) return value;
    return MC[ this.units ].from[ this.displayUnitsAs ]( value );
});