


//updateDefinition
module.exports = (function( updateObject, definitionId ){
    Object.keys( updateObject ).forEach( updateField => {
        const definition = this.byId[ definitionId ];
        const definitionAttributeValue = definition[ updateField ];
        const isObject = definitionAttributeValue !== undefined && typeof definitionAttributeValue === 'object' && !Array.isArray( definitionAttributeValue );
        const newValue = !isObject ? updateObject[ updateField ] : Object.assign({},
            this.byId[ definitionId ][ updateField ], {
                [ updateField ]: updateObject[ updateField ]
            }
        );
        this.byId[ definitionId ][ updateField ] = newValue;
        if( definition.rule && this.rules[ definitionId ] ){
            this.rules[ definitionId ][ updateField ] = newValue;
        }
        if( definition.condition && this.rules[ definitionId ] ){
            this.conditions[ definitionId ][ updateField ] = newValue;
        }
    })
})
