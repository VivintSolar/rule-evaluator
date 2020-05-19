const JoinAppliedConditions = require('../../utilities/JoinAppliedConditions');

//AppliedRules.getAppliedConditionsByTag
module.exports = (function(){
    const appliedRuleSet = this.getRulesAppliedInSet();
    const joinAppliedConditions = new JoinAppliedConditions();
    if( appliedRuleSet && appliedRuleSet.length > 0 ){
        appliedRuleSet.map( ruleId => {
            const appliedRule = this.rules[ ruleId ];
            const appliedRuleAppliedConditions = appliedRule.getAppliedConditions();
            if( appliedRuleAppliedConditions && appliedRuleAppliedConditions.length > 0 ) {
                joinAppliedConditions.join( appliedRuleAppliedConditions )
            }
        });
    }
    return joinAppliedConditions.uniqueAppliedConditions;
});