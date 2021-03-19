

//AppliedRules.getRuleIdsByTag
module.exports = (function( _tagIds ){
    let tagIds;
    if(_tagIds && !Array.isArray(_tagIds)) tagIds = [_tagIds];
    if( this.rules ){
        return Object.keys( this.rules ).filter( ruleId => (
            this.rules[ ruleId ].tags && tagIds.every(tagId =>  this.rules[ ruleId ].tags.includes( tagId ))
        ))
    }
    return [];
});
