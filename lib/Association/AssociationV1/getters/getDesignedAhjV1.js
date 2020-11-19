const AssociationTree = require('../../AssociationTree')



//getDesignedAHJ
module.exports = (function( ){

   const { elements } = this.ahj;

   const associationTree = new AssociationTree({ elements })
   return associationTree.getDesignedAHJ( this.ahj )

});
