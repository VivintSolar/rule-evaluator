const JoinAppliedConditions = require('../../utilities/JoinAppliedConditions');

//AppliedRules.getAllAppliedConditions
module.exports = (function(){
    const joinAppliedConditions = new JoinAppliedConditions();
    if( this.rules ){
        Object.values( this.rules ).map( appliedRule => {
            const appliedRuleAppliedConditions = appliedRule.getAppliedConditions();
            if( appliedRuleAppliedConditions && appliedRuleAppliedConditions.length > 0 ) {
                joinAppliedConditions.join( appliedRuleAppliedConditions )
            }
        });
    }
    return joinAppliedConditions.uniqueAppliedConditions;
});