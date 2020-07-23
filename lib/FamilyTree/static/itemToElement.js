const getOptionsSkeleton = require('./getOptionsSkeleton');
const getValue = require('./getValue');
const setValue = require('./setValue');
const pick = require('./pick');


// itemToElement
module.exports = function( item, options ){
    const { aliases, elementFields } = options;
    let element = pick(item, elementFields);
    return element;
};
