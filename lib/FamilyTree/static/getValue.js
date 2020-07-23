const getLocation = require('./getLocation')

const _getValue = (  object, location  ) => {
   const originalObject = Object.assign({}, object||{});
   let value = Object.assign({}, originalObject||{});
   location.forEach( field => {
      value = value[field];
   });
   return value;
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
