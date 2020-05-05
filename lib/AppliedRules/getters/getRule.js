

//getRule
module.exports = (function(ruleId){
    if( !this.rules[ ruleId ] ) return null;
    return this.rules[ ruleId ];
});