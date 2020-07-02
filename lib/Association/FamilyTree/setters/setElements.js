
//setElements
module.exports = (function(elements){
   if( Array.isArray( elements ) && elements.length > 0 ){
      this.elements = [...elements||[]];
   } else {
      throw new Error(`'elements' TypeMissMatch ${ typeof elements }. 'elements' must be of type Array`);
   }
});
