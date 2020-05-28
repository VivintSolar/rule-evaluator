const RuleDefinition = require('./RuleDefinition');
const ConditionDefinition = require('./ConditionDefinition');
const RuleConditionDefinition = require('./RuleConditionDefinition');

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
                let definitionClass;
                if( ruleDefinition.condition ){
                    const ruleConditionDefinitionClass = new RuleConditionDefinition( ruleDefinition );
                    this.byId[ ruleDefinition.id ] = ruleConditionDefinitionClass;
                    definitionClass = ruleConditionDefinitionClass
                } else {
                    const ruleDefinitionClass = new RuleDefinition( ruleDefinition );
                    this.byId[ ruleDefinition.id ] = ruleDefinitionClass;
                    definitionClass = ruleDefinitionClass;
                }
                return {
                    [ ruleDefinition.id ]: definitionClass
                }
            })
        );
    }
    if( conditions ){
        this.conditions = Object.assign({},
            ...Object.values( conditions ).map( conditionDefinition => {
                let definitionClass;
                if( conditionDefinition.rule ){
                    const ruleConditionDefinitionClass = new RuleConditionDefinition( conditionDefinition );
                    this.byId[ conditionDefinition.id ] = ruleConditionDefinitionClass;
                    definitionClass = ruleConditionDefinitionClass
                } else {
                    const conditionDefinitionClass = new ConditionDefinition( conditionDefinition );
                    this.byId[ conditionDefinition.id ] = conditionDefinitionClass;
                    definitionClass = conditionDefinitionClass
                }
                return {
                    [ conditionDefinition.id ]: definitionClass
                }
            })
        );
    }
});