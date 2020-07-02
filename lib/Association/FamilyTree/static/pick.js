import * as FamilyTree from "../index";


//pick
module.exports = (function( object, pick ){
   if( Array.isArray(pick) && pick.length > 0 && typeof object === 'object' && !Array.isArray(object) ){
      let result = {};
      pick.map( path => {
         const value = FamilyTree.getValue( object, path );
         result = FamilyTree.setValue( result, path, value );
      });
      return result;
   }
   return object;
});
