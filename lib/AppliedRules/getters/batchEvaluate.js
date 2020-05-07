

//AppliedRules.batchEvaluate
module.exports = (function( rules, conditions ){
    this.conditions = conditions;
    return Object.assign({},
        ...rules.map( ruleId => ({
            [ ruleId ]: this.evaluate( ruleId, this.conditions )
        }))
    )
});