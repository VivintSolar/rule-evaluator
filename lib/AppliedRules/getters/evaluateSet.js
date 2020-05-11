

//AppliedRules.evaluateSet
module.exports = (function( conditions ){
    const appliedRuleSet = this.getRulesAppliedInSet();
    if( appliedRuleSet && appliedRuleSet.length > 0 ){
        return this.batchEvaluate( appliedRuleSet, conditions );
    }
});