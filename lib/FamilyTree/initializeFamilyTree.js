const initializeOptions = require('./static/initializeOptions');

//initializeFamilyTree
module.exports = (function({ elements, tree, items, options }){
   const _elements = elements||[];
   const _items = items||[];
   const _tree = Object.assign({}, tree||{});
   this.options = initializeOptions( options || this.options );
   if( _items.length > 0 ){
      this.initializeItems( _items, this.options )
   } else if( _elements.length > 0 ){
      this.initializeElements( _elements )
   } else if( Object.keys( _tree ).length > 0 ){
      this.initializeTree( _tree );
   }
});
