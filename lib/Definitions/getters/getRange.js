
//definitions.getRange
module.exports = (function( definitionId ){
   const definition = this.getDefinitions( definitionId );
   return definition.getRange();
});