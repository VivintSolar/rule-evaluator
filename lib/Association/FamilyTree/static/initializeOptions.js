const getOptionsSkeleton = require('./getOptionsSkeleton');


//initializeOptions
module.exports = function( options ){
    return Object.assign({}, getOptionsSkeleton(),options||{})
};
