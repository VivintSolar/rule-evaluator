

// getPossibleStatements

module.exports = (function( ruleId, clientConditions ){

    this._evaluationType = 'applied';
    this._conditions = clientConditions;

    const {
        statements
    } = this._appliedRules[ ruleId ];



    return statements.filter( statement => (
        this.evaluateConditions( statement.condition )
    ));
});