

//AppliedRules.getRulesByTag
module.exports = (function( tagId ){
    if( !this.rules ) return [];
    return Object.values( this.rules ).filter( rule => (
        rule.tags && rule.tags.includes( tagId )
    ))
});