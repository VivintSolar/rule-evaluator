

//AppliedRules.getRulesByTag
module.exports = (function( _tagIds ){
    let tagIds = _tagIds;
    if( tagIds && !Array.isArray(tagIds)) tagIds = [tagIds];
    if( !this.rules ) return [];
    return Object.values( this.rules ).filter( rule => (
        rule.tags && tagIds.every(tagId =>  rule.tags.includes( tagId ))
    ))
});
