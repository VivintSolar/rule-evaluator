const itemToElement = require('./itemToElement');


// itemsToElements
module.exports = function( items, options ){
    if( items && items.length > 0 ){
        return items.map( item => itemToElement(item, options) );
    }
};
