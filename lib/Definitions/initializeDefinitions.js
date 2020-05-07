const RuleDefinition = require('../RuleDefinition');
const ConditionDefinition = require('../ConditionDefinition');

//initializeDefinitions
module.exports = (function({ definitions }){
    const {
        rules,
        conditions
    } = definitions ||{};
    const combined = Object.assign({}, rules, conditions);
    this.byId = combined;
    this.ids = Object.keys( combined );
    if( rules ){
        this.rules = Object.assign({},
            ...Object.values( rules ).map( ruleDefinition => ({
                [ ruleDefinition.id ]: new RuleDefinition( ruleDefinition )
            }))
        );
    }
    if( conditions ){
        this.conditions = Object.assign({},
            ...Object.values( conditions ).map( conditionDefinition => ({
                [ conditionDefinition.id ]: new ConditionDefinition( conditionDefinition )
            }))
        );
    }
});