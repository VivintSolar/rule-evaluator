

// addUnique
module.exports = function( array, item ){
   if( !array.includes( item ) ) array.push( item )
   return array;
};
