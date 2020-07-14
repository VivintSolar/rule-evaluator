const toElements = require('../static/toElements');

//initializeTree
module.exports = (function(tree){
   this.tree = Object.assign({}, tree||{});
   this.elements = [];
   if( Object.keys(this.tree).length > 0 ){
      this.elements = toElements(this.tree, this.options);
   }
});
