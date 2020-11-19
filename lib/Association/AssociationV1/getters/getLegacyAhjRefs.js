const AssociationTree = require('../../AssociationTree');

//getLegacyAhjRefs
module.exports = (function( ){

   const { elements } = this.ahj;

   const associationTree = new AssociationTree({ elements })
   return associationTree.getLegacyAhjRefs( );

});
