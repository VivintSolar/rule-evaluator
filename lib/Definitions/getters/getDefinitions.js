
//definition.get
module.exports = (function( singleStringOrMultipleAsArray ){
   if( typeof singleStringOrMultipleAsArray === "string" ) return this.byId[ singleStringOrMultipleAsArray ];
   if( Array.isArray( singleStringOrMultipleAsArray ) ) return Object.assign({},
       ...singleStringOrMultipleAsArray.map( definitionId => ({
          [ definitionId ]: this.byId[ definitionId ]
       }))
   );
   throw new Error(`${ singleStringOrMultipleAsArray } is an invalid parameter in Get Definition!`)
});