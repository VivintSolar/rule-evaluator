

// definition.toRawDefinition
module.exports = (function(){
    if( !this.definitionAttributes ) throw new Error("No definition Attributes found!");
    return this.definitionAttributes.reduce(( results, attrName ) => {
        if( this[ attrName ] !== undefined ){
            results[ attrName ] = this[ attrName ];
        }
        return results;
    },{})
});