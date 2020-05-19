

//AppliedRules.getAppliedConditions
module.exports = (function(ruleId){
    if( this.rules && this.rules[ ruleId ] ){
        return this.rules[ ruleId ].getAppliedConditions();
    }
    return [];
});