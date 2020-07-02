import * as FamilyTree from "../index";


//setValue
module.exports = (function( object, path, value ){
   let _object = Object.assign({}, object||{});
   const location = FamilyTree.getLocation( path );
   location.reduce( (previous, field, index) => {
      const currentLocation = [ ...previous, field ];
      const _value = FamilyTree.getValue( object, currentLocation)
      if( index === location.length ){
         _object = FamilyTree.setValue( _object,  currentLocation, value )
      } else if( _value === undefined ){
         _object = FamilyTree.setValue( _object,  currentLocation, {} )
      }
      previous.push( field );
      return previous;
   }, []);
   return _object;
});
