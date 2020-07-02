import * as FamilyTree from "../index";

//getElements
module.exports = (function(){
   const { childAlias: defaultChildAlias } = FamilyTree.getOptionsSkeleton();
   const { childAlias } = this.options;
   if( defaultChildAlias !== childAlias ){
      const children = FamilyTree.getChildren( )

   }
   return this.elements;
});
