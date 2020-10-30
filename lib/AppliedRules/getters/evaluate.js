

//AppliedRules.evaluate
module.exports = (function(ruleId, conditions, options){
    if( options ) this.updateOptions( options, ruleId )
    this.updateConditions( conditions, true );
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
