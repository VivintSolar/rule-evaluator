
//setTree
module.exports = (function(tree){
   if( !!tree && typeof tree === 'object' && !Array.isArray( tree ) ){
      this.tree = Object.assign({}, tree||{});
   } else {
      throw new Error(`'tree' TypeMissMatch ${ typeof tree }. 'tree' must be of type object`);
   }
});
