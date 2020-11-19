


//getFamilyTree
module.exports = (function( ){
   const { ahjRefs } = this.ahj;
   const familyTree = new this.FamilyTree({elements: ahjRefs });
   return familyTree;
});
