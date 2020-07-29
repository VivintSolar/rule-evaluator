

// getAppliedStatement

module.exports = (function( conditions, valueAccessor ){

    this.conditions = conditions;

    const { dataType } = this.template;


    const { statements } = this.evaluateStatements();


    const getStatement = {
        object: (function(){
            return valueAccessor && statements ? statements.filter( ({ value }) => value[ valueAccessor ] !== undefined )[ 0 ] : null
        }),
        default: (function(){
            return valueAccessor && statements ? statements.filter( ({ value }) => valueAccessor === value )[ 0 ] : statements[ 0 ] || null
        })
    };

    return getStatement[ dataType ] ? getStatement[ dataType ]() : getStatement.default();
});
