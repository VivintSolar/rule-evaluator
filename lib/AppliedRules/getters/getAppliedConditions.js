

//AppliedRules.getAppliedConditions
module.exports = (function(){
    if( this.rules ){
        const uniqueAppliedConditions = [];
        const joinAppliedConditions = ( appliedConditions ) => appliedConditions.map( appliedConditionId => addToAppliedConditions( appliedConditionId ) );
        const addToAppliedConditions = (appliedConditionId) => {
            if( !uniqueAppliedConditions.includes( appliedConditionId ) ) {
                uniqueAppliedConditions.push( appliedConditionId );
            }
        };
        Object.values( this.rules ).map( appliedRule => {
            const appliedRuleAppliedConditions = appliedRule.getAppliedConditions();
            if( appliedRuleAppliedConditions && appliedRuleAppliedConditions.length > 0 ) joinAppliedConditions( appliedRuleAppliedConditions )
        });
        return uniqueAppliedConditions;
    }
});