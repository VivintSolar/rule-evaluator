const getLocation = require('./getLocation')

const _getValue = (  object, location  ) => {
   const originalObject = Object.assign({}, object||{});
   let value = Object.assign({}, originalObject||{});
   location.forEach( field => {
      // if( typeof value === 'object' && !Array.isArray( value ) && value !== null ) {
      //    value = value[field]
      // }
      value = value[field];
   });
   return value;
   // return Array.isArray( value ) && value.length > 0 ? value : undefined;
}

//getValue
module.exports = function( object, path ){
   try{
      const location = getLocation( path );
      return _getValue(object, location);
   } catch( error ) {
      throw error;
   }
};
