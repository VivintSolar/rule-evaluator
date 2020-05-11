

//AppliedRules.getAppliedStatement
module.exports = (function( ruleId, conditions, valueAccessor ){
    if( !this.rules[ ruleId ] ) return null;
    return this.rules[ ruleId ].getAppliedStatement( conditions, valueAccessor )
});