

//AppliedRules.getRuleIdsByTag
module.exports = (function( tagId ){
    if( this.rules ){
        return Object.keys( this.rules ).filter( ruleId => (
            this.rules[ ruleId ].tags && this.rules[ ruleId ].tags.includes( tagId )
        ))
    }
    return [];
});