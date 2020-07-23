const addUnique = require( '../static/addUnique');

//getAllDescendants
module.exports = (function( ){
   const ids = Object.keys( this.tree );
   let allDescendants = [];
   ids.forEach( id => {
      const descendants = this.getDescendants( id )||[];
      if( descendants && descendants.length > 0 ) descendants.map( descendentId => {
         allDescendants = addUnique( allDescendants, descendentId )
      })
   } )

   return allDescendants;
});
