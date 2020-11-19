

//AppliedRules.batchEvaluate
module.exports = (function( rules, conditions, options ){
    if( options ) this.updateOptions( options )
    this.updateConditions( conditions, true )
    return Object.assign({},
        ...rules.map( ruleId => ({
            [ ruleId ]: this.evaluate( ruleId, this.conditions )
        }))
    )
});
