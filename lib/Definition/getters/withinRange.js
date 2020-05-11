


module.exports = (function(value, isDisplayValue ){
    const { dataType, range } = this;
    if( !range || dataType !== "number" ) return true;
    const { min, max } = range;
    if( !isDisplayValue ) value = this.convertNumberToDisplayValue( value );
    return !( min !== undefined && min > value ) && !( max !== undefined && max < value );
});