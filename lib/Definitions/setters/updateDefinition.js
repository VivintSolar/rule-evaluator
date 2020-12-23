


//updateDefinition
module.exports = (function( updateObject, definitionId ){
    Object.keys( updateObject ).forEach( updateField => {
        // const definition = this.byId[ definitionId ];
        const definition = this.getDefinitions(definitionId);
        if( definition ){
            const definitionAttributeValue = definition[ updateField ];
            const isObject = definitionAttributeValue !== undefined && typeof definitionAttributeValue === 'object' && !Array.isArray( definitionAttributeValue );
            this.byId[ definitionId ][ updateField ] = !isObject ? updateObject[ updateField ] : Object.assign({},
                definitionAttributeValue||{}, updateObject[ updateField ]
            );
        }
        // if( definition.rule && this.rules[ definitionId ] ){
        //     this.rules[ definitionId ][ updateField ] = this.byId[ definitionId ][ updateField ];
        // }
        // if( definition.condition && this.conditions[ definitionId ] ){
        //     this.conditions[ definitionId ][ updateField ] = this.byId[ definitionId ][ updateField ];
        // }
    })
})
