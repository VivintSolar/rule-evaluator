

//AppliedRules.evaluateAll
module.exports = (function(){
    return Object.assign({},
        ...Object.keys(this.rules).map(ruleId => ({
            [ ruleId ]: this.rules[ruleId].evaluate()
        }))
    )
});