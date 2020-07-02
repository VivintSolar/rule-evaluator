import * as FamilyTree from "../index";


// itemToElement
module.exports = (function( item, options ){
    const { childrenAlias: defaultChildrenAlias } = FamilyTree.getOptionsSkeleton();
    const { mapBy,  aliases, elementFields } = options;
    const children = FamilyTree.getValue( item, aliases.children )||[];
    const element = FamilyTree.pick(item, elementFields);
    if( children.length > 0 ){
        // const children = children.map( child => FamilyTree.getValue(child, mapBy.child ));
        FamilyTree.setValue( element, aliases.children, children );
    }
    return element;
});
