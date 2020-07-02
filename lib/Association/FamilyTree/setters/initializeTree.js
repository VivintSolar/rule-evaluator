import * as FamilyTree from "../index";

//initializeTree
module.exports = (function(tree){
   this.tree = Object.assign({}, tree||{});
   this.elements = [];
   if( Object.keys(this.tree).length > 0 ){
      this.elements = FamilyTree.toElements(this.tree, this.options);
   }
});
