
//definition.getDefinitions
module.exports = (function( definitionIds ){
   if( !this.definitions.initialized ){
       if( typeof definitionIds === 'string' ) {
           const combined = Object.assign({},
               this.definitions.rules,
               this.definitions.conditions
           );
           return combined[ definitionIds ];
       }
       if(Array.isArray( definitionIds )) return Object.assign({},
           ...definitionIds.map( definitionId => ({
               [ definitionId ]: this.definitions[ definitionId ]
           }))
       )

   }
   return this.definitions.get( definitionIds );

});