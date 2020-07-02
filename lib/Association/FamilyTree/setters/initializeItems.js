import * as FamilyTree from "../index";

//initializeItems
module.exports = (function( items, options ){
   this.items = [...items||[]];
   this.elements = [];
   this.tree = {};
   if( items.length > 0 ){
      const elements = FamilyTree.itemsToElements( items, options);
      if( elements.length === items.length && elements.every( element => !!element ) ){
         this.initializeElements( elements );
      }
   }
});
