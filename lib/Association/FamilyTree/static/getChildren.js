import * as FamilyTree from "../index";

// getChildren
module.exports = (function( element, options ){
   const { aliases } = options;
   return FamilyTree.getValue( element, aliases.children );
});
