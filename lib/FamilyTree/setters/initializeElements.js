const toTree = require('../static/toTree');

//initializeElements
module.exports = (function( elements ){
   this.elements = [ ...elements||[] ];
   this.tree = {};
   if( this.elements.length > 0 ){
      this.tree = toTree(this.elements, this.options);
   }
});
