

//AppliedRules.evaluate
module.exports = (function(ruleId, conditions){
    this.conditions = conditions;
    if( !this.rules[ ruleId ] ) return {
        exceptions: null,
        conditions: null,
        value: null,
        errors: [
            `Rule Not Found: ${ruleId}`
        ],
        id: ruleId
    };
    return this.rules[ ruleId ].evaluate( )
});