

// evaluateStatements

module.exports = (function( evaluationType ){

    let exceptions = null;

    let statements = this.statements.filter( statement => {
        const { description, condition } = statement;
        const success = this.evaluateConditions( condition, evaluationType );
        if( !success ){
            if( description ){
                if( !exceptions ) exceptions = [];
                exceptions.push( statement )
            }

        }
        return success;
    });

    if( statements.length === 0 ) statements = null;


    return {
        statements,
        exceptions
    }

});
