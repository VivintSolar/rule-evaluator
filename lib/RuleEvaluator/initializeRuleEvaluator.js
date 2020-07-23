
const getAssociationObjectSkeleton = () => {
   return {
      ahj:{},
      definitions:{}
   }
};

//initializeRuleEvaluator
module.exports = (function(associationObject){
   this.associationObject = Object.assign({}, getAssociationObjectSkeleton(), associationObject);
});
