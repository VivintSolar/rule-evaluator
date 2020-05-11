

//AppliedRules.getUnsupportedStatements
module.exports = (function( ruleId, clientConditions ){
    if( !this.rules[ ruleId ] ) return null;
    return this.rules[ ruleId ].getUnsupportedStatements( clientConditions )
});