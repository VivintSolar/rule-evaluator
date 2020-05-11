

//AppliedRules.getPossibleStatements
module.exports = (function( ruleId, clientConditions ){
    if( !this.rules[ ruleId ] ) return null;
    return this.rules[ ruleId ].getPossibleStatements( clientConditions )
});