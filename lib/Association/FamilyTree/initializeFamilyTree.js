import * as FamilyTree from "./index";

//initializeAssociation
module.exports = (function({ elements, tree, items, options }){
   const _elements = elements||[];
   const _items = items||[];
   const _tree = Object.assign({}, tree||{});
   this.options = FamilyTree.initializeOptions( options );
   if( _items.length > 0 ){
      this.initializeItems( _items )
   } else if( _elements.length > 0 ){
      this.initializeElements( _elements )
   } else if( Object.keys( _tree ).length > 0 ){
      this.initializeTree( _tree );
   }
});
