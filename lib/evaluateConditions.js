
module.exports = (function( conditions ){
    if( !conditions ) return true;
    if( !this._conditions ) return false;

    return conditions.every( ( { left, operator, right } ) => (
        this.calculator( left, operator, right )
    ));
});