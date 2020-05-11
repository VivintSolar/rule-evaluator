
//definition.setName
module.exports = (function(attrName, attrValue){
   if( !this.template ) this.template = {};
   this.template[ attrName ] = attrValue;
   return this.template;
});