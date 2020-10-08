const parseAssociationObjectVersion = require('./associationTranslator/parseAssociationObjectVersion');

const getAssociationObjectSkeleton = apiVersion => {
   if( apiVersion === "v2" ) return {
      requestParameters:{},
      documents:[],
      authoritiesInfo:{},
   }
   return {
      ahj:{},
      definitions:{}
   }
};

//initializeRuleEvaluator
module.exports = (function(associationObject){
   this.apiVersion = parseAssociationObjectVersion( associationObject );
   this.associationObject = Object.assign({}, getAssociationObjectSkeleton( this.apiVersion ), associationObject);
});
