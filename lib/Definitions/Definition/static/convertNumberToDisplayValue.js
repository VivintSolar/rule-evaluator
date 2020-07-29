

const MC = require('../../../Measurements');

module.exports = ( value, template ) => {
    const { displayUnitsAs, units } = template||{}
    if( !displayUnitsAs ) return value;
    return MC[ units].to[ displayUnitsAs ]( value );
};
