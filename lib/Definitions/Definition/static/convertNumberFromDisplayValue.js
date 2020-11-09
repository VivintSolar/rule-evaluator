

const MC = require('../../../Measurements');

module.exports = ( value, template ) => {
    const { displayUnitsAs, units } = template||{};
    if( !displayUnitsAs ) return value;
    return MC.reconstruct( value, displayUnitsAs, units );
    // return MC[ units ].from[ displayUnitsAs ]( value );
};
