const RuleDefinition = require('../RuleDefinition');
const ConditionDefinition = require('../ConditionDefinition');

//initializeDefinitions
module.exports = (function({ definitions }){
    const {
        rules,
        conditions
    } = definitions ||{};
    const combined = Object.assign({}, rules, conditions);
    this.byId = {};
    this.ids = Object.keys( combined );
    if( rules ){

        this.rules = Object.assign({},
            ...Object.values( rules ).map( ruleDefinition => {
                const ruleDefinitionClass = new RuleDefinition( ruleDefinition );
                this.byId[ ruleDefinition.id ] = ruleDefinitionClass;
                return {
                    [ ruleDefinition.id ]: ruleDefinitionClass
                }
            })
        );
    }
    if( conditions ){
        this.conditions = Object.assign({},
            ...Object.values( conditions ).map( conditionDefinition => {
                const conditionDefinitionClass = new ConditionDefinition( conditionDefinition );
                this.byId[ conditionDefinition.id ] = conditionDefinitionClass;
                return {
                    [ conditionDefinition.id ]: conditionDefinitionClass
                }
            })
        );
    }
});