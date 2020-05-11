

//AppliedRules.defineSetByTag
module.exports = (function( tagId ){
    if( this.rules ){
        this.ruleIds = Object.keys( this.rules ).filter( ruleId => (
            this.rules[ruleId].tags && this.rules[ruleId].tags.includes( tagId )
        ))
    } else this.ruleIds = [];
    return this.ruleIds;
});