


module.exports = (function( attributeNames ){
    if( typeof attributeNames === 'string' ) return this[ attributeNames ];
    if( Array.isArray( attributeNames ) ) return Object.assign({},
        ...attributeNames.map( attributeName => ({
            [ attributeName ]: this.getGlobalAttributes( attributeName )
        }))
    );

});