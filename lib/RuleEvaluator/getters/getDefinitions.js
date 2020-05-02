
//definition.getDefinitions
module.exports = (function( definitionIds ){
   if( !this.definitions.initialize ){
      return Object.assign({},
          ...definitionIds.map( definitionId => ({
             [ definitionId ]: this.definitions[ definitionId ]
          }))
      )
   }
   return this.definitions.get( definitionIds );

});