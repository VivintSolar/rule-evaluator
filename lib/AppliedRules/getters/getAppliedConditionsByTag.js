const JoinAppliedConditions = require('../../utilities/JoinAppliedConditions');

//AppliedRules.getAppliedConditionsByTag
module.exports = (function( tagId ){
    const rules = this.getRulesByTag( tagId );
    const joinAppliedConditions = new JoinAppliedConditions();
    if( rules && rules.length > 0 ){
        rules.map( appliedRule => {
            const appliedRuleAppliedConditions = appliedRule.getAppliedConditions();
            if( appliedRuleAppliedConditions && appliedRuleAppliedConditions.length > 0 ) {
                joinAppliedConditions.join( appliedRuleAppliedConditions )
            }
        });
    }
    return joinAppliedConditions.uniqueAppliedConditions;
});