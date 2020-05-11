

// definition.validateValue
module.exports = (function( value, isDisplayValue ){
    if( value === "" || value === null || value === undefined ) return false;
    if( this.dataType === 'number' ) {
        if( typeof value !== 'number' ) return false;
        return this.withinRange( value, isDisplayValue );
    }
    else if( this.dataType === "string" ) return typeof value === "string";
    if( this.dataType === "enum" && typeof value !== "string" ) return false;
    if( isDisplayValue ) value = this.convertFromDisplayValue( value );
    if( this.dataType === "boolean" ) return typeof value === "boolean";
    else if( this.dataType === "enum" ){
        const itemFound = ( this.items||[] ).filter( item => item.id === value )[0];
        return !!itemFound;
    }
    return false;
});