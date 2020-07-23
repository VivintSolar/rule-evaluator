const getLocation = require('./getLocation');
const getValue = require('./getValue');




const setToValue = function(obj, path, value ){
   let i;
   const location = getLocation( path );
   for (i = 0; i < location.length - 1; i++){
      const currentKey = location[i];
      if( obj[ currentKey ] === undefined ){
         // TODO: provide support for dynamically setting undefined arrays
         if( typeof currentKey === 'number' ) throw new Error('Dynamically Setting Arrays Not Supported')
         if( typeof currentKey === 'string' ) {
            obj[ currentKey ] = {}
            obj = obj[ currentKey ];
         }
      } else obj = obj[ currentKey ];
   }
   obj[ location[i] ] = value;
}



const setValue = function( object, path, value ){
   let _object = JSON.parse(JSON.stringify(object));
   setToValue( _object, path, value )
   return _object;
};


//setValue
module.exports = setValue;

