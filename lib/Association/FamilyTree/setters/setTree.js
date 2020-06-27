import * as FamilyTree from "./index";

//setTree
module.exports = (function(tree){
   this.tree = Object.assign({}, tree||{});
   this.elements = [];
   if( Object.keys(this.tree).length > 0 ){
      this.elements = FamilyTree.toElements(this.tree);
   }
});
