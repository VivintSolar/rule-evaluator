import * as FamilyTree from "../index";

//initializeElements
module.exports = (function(elements){
   this.elements = [...elements||[]];
   this.tree = {};
   if( this.elements.length > 0 ){
      this.tree = FamilyTree.toTree(this.elements, this.options);
   }
});
