
//definition.getUnits
module.exports = (function( definitionId ){
   const definition = this.getDefinitions( definitionId );
   return definition.getUnits();
});