const getValue = require('./getValue');
const setValue = require('./setValue');


//pick
module.exports = function( object, pick ){
   if( Array.isArray(pick) && pick.length > 0 && typeof object === 'object' && !Array.isArray(object) ){
      return pick.reduce( (result, path) => {
         const value = getValue( object, path );
         if( value !== undefined ) result = setValue( result, path, value );
         return result;
      }, {});
   }
   return object;
};
