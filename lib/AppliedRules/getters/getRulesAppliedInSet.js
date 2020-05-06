

//AppliedRules.getRulesAppliedInSet
module.exports = (function(){
    if( this.ruleIds ) return this.ruleIds.filter( ruleId => (
        this.rules[ ruleId ] !== undefined
    ));
});