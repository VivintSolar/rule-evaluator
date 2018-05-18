

// getAppliedStatement

module.exports = (function( ruleId, conditions, valueAccessor ){

    this._conditions = conditions;

    const { statements } = this._appliedRules[ ruleId ];

    const { template: { dataType } } = this._definitions.rules[ ruleId ];


    const evaluated = statements.filter( statement => (
        this.evaluateConditions( statement.condition )
    ));


    const getStatement = {
        object: (function(){
            return valueAccessor ? evaluated.filter( ({ value }) => value[ valueAccessor ] )[ 0 ] : null
        }),
        default: (function(){
            return valueAccessor ? evaluated.filter( ({ value }) => valueAccessor === value )[ 0 ] : evaluated[ 0 ] || null
        })
    };

    const statement = getStatement[ dataType ] ? getStatement[ dataType ]() : getStatement.default();

    return statement;
});