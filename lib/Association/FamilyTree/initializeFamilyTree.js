
//initializeAssociation
module.exports = (function({ elements, tree }){
   this.elements = elements||[];
   this.tree = tree||{};
   if( this.elements.length > 0 ){
      this.setElements( this.elements )
   } else if( Object.keys(this.tree).length > 0 ){
      this.setTree( this.tree );
   }
});
