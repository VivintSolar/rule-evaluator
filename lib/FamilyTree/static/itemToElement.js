const getOptionsSkeleton = require('./getOptionsSkeleton');
const getValue = require('./getValue');
const setValue = require('./setValue');
const pick = require('./pick');


// itemToElement
module.exports = function( item, options ){
    const { aliases, elementFields } = options;
    // const children = getValue( item, aliases.children )||[];
    let element = pick(item, elementFields);
    // if( children.length > 0 ){
    //     // const children = children.map( child => FamilyTree.getValue(child, mapBy.child ));
    //     element = setValue( element, aliases.children, children );
    // }
    return element;
};
