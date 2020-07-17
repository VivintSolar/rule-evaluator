const AssociationTree = require('../AssociationTree')



//getDesignedAhj
module.exports = (function( ){

   const { elements } = this.ahj;

   const associationTree = new AssociationTree({ elements })
   return associationTree.getDesignedAHJ( this.ahj )

});
