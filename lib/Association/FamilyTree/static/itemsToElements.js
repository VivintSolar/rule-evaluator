import * as FamilyTree from "../index";


// itemsToElements
module.exports = (function( items, options ){
    if( items && items.length > 0 ){
        return items.map( item => FamilyTree.itemToElement(item, options) );
    }
});
