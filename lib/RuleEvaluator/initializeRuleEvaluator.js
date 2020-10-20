const parseAssociationObjectVersion = require('../Association/associationTranslator/parseAssociationObjectVersion');

const getAssociationObjectSkeleton = apiVersion => {
   if( apiVersion === "v2" ) return {
      requestParameters:{},
      documents:[],
      authorityInfo:{},
   }
   return {
      ahj:{},
      definitions:{}
   }
};

//initializeRuleEvaluator
module.exports = (function(associationObject, options){
   this.apiVersion = options.apiVersion || parseAssociationObjectVersion( associationObject );
   this.associationObject = Object.assign({}, getAssociationObjectSkeleton( this.apiVersion ), associationObject);
});
