const getLocation = require('./getLocation');
const getValue = require('./getValue');




const setToValue = function(obj, path, value ){
   let i;
   // path = path.split('.');
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








// const setValue = function( object, path, value ){
//    let _object = JSON.parse(JSON.stringify(object));
//    const location = getLocation( path );
//    location.reduce( (previous, field, index) => {
//       const currentLocation = [ ...previous, field ];
//       const _value = getValue( object, currentLocation)
//       if( index === location.length - 1 ){
//          _object = setValue( _object,  currentLocation, value )
//       } else if( _value === undefined ){
//          _object = setValue( _object,  currentLocation, {} )
//       }
//       previous.push( field );
//       return previous;
//    }, []);
//    return _object;
// };
