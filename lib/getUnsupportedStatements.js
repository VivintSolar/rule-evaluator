

// getSupportedStatements

module.exports = (function( ruleId, supportedConditions ){

    this._evaluationType = 'applied';
    this._conditions = supportedConditions;
    let descriptions;
    const {
        statements
    } = this._appliedRules[ ruleId ];


    return statements.filter( statement => (
        statement.condition && statement.condition.some( ({ left }) => !supportedConditions.includes( left ) )
    ));
});