

//AppliedRules.getRuleIdsByTag
module.exports = (function( _tagIds ){
    let tagIds = _tagIds;
    if(tagIds && !Array.isArray(tagIds)) tagIds = [tagIds];
    if( this.rules ){
        return Object.keys( this.rules ).filter( ruleId => (
            this.rules[ ruleId ].tags && tagIds.every(tagId =>  this.rules[ ruleId ].tags.includes( tagId ))
        ))
    }
    return [];
});
