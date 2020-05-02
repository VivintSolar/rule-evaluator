

//initializeRules
module.exports = (function(rules){
    if( rules ) {
        this.rules = rules;
        this.ruleIds = Object.keys( rules )
    }
});