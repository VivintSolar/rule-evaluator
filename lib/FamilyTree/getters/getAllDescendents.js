const addUnique = require( '../static/addUnique');

//getAllDescendents
module.exports = (function( ){
   const ids = Object.keys( this.tree );
   let allDescendents = [];
   ids.forEach( id => {
      const descendents = this.getDescendents( id )||[];
      if( descendents && descendents.length > 0 ) descendents.map( descendentId => {
         allDescendents = addUnique( allDescendents, descendentId )
      })
   } )

   return allDescendents;
});
