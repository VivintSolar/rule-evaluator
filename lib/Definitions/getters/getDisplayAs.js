
//definitions.getDisplayAs
module.exports = (function( definitionId ){
   const definition = this.getDefinitions( definitionId );
   return definition.getDisplayAs();
});