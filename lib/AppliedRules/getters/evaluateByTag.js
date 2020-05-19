

//AppliedRules.evaluateSet
module.exports = (function( tagId, conditions ){
    const ruleIds = this.getRuleIdsByTag(tagId);
    if( ruleIds && ruleIds.length > 0 ){
        return this.batchEvaluate( ruleIds, conditions );
    }
});