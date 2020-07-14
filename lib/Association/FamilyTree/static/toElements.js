

//toElements
module.exports = function( _tree, options ){
   const tree = Object.assign({}, _tree||{});
   if( Object.keys( tree ).length === 0 ){
      throw new Error("No tree found! toElements() converts tree -> elements");
   } else {
      return Object.values( tree );
   }
};
