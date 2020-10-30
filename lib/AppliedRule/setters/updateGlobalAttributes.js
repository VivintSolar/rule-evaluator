


module.exports = (function( updatesByAttrName ){
    return Object.assign({},
        ...Object.keys(updatesByAttrName).map( attrName => {
            if( attrName === 'conditions' ){

            } else if( typeof updatesByAttrName[ attrName ] === 'object' && !Array.isArray(updatesByAttrName[ attrName ]) ){
                this[ attrName ] = Object.assign({},
                    this[ attrName ],
                    updatesByAttrName[ attrName ]
                );
            } else this[ attrName ] = updatesByAttrName[ attrName ];
            return {
                [ attrName ]: this[ attrName ]
            }
        })
    )
});
