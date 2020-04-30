
module.exports = (function( conditions, evaluationType ){
    let calculatorType = 'conditions';
    if( 'supported' === evaluationType ){
        calculatorType = 'siteConditions'
    }

    const {
      supportedConditions
    } = this;

    let success = null;
    if( 'unsupported' === evaluationType ) {
        if( !conditions ) return false;
        success = conditions.some( ({ left }) => left && !supportedConditions.includes( left ) )
    } else {
        if( !conditions ) return true;
        success = conditions.every( ( { left, operator, right } ) => {
            return this.calculator( left, operator, right, calculatorType );
        });
    }

    return success;
});
