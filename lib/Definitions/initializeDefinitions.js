const RuleDefinition = require('./RuleDefinition');
const ConditionDefinition = require('./ConditionDefinition');
const RuleConditionDefinition = require('./RuleConditionDefinition');
const { objectRestSpread } = require('../utilities/util')


const initializeDefinitionOptions = ( options, definitionId ) => {
    const { byId, rest: globalOptions } = objectRestSpread( options, [ "byId" ]);
    return Object.assign({}, globalOptions, ( byId||{} )[ definitionId ]||{} );
}
const buildDefinitionParameters = (definition, globalOptions, apiVersion) => {
    const options = initializeDefinitionOptions( globalOptions, definition.id );
    return Object.assign({}, definition, { options, apiVersion });
}

//initializeDefinitions
module.exports = (function({ definitions, options, apiVersion }){
    const {
        rules,
        conditions
    } = definitions ||{};



    const combined = Object.assign({}, rules, conditions);
    this.byId = {};
    this.ids = Object.keys( combined );
    this.options = options||{};
    this.apiVersion = apiVersion;
    if( rules ){

        this.rules = Object.assign({},
            ...Object.values( rules ).map( ruleDefinition => {
                let definitionClass;
                if( ruleDefinition.condition ){
                    const ruleConditionDefinitionClass = new RuleConditionDefinition( buildDefinitionParameters(ruleDefinition, options, apiVersion) );
                    this.byId[ ruleDefinition.id ] = ruleConditionDefinitionClass;
                    definitionClass = ruleConditionDefinitionClass
                } else {
                    const ruleDefinitionClass = new RuleDefinition( buildDefinitionParameters(ruleDefinition, options, apiVersion) );
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
                    const ruleConditionDefinitionClass = new RuleConditionDefinition( buildDefinitionParameters(conditionDefinition, options, apiVersion) );
                    this.byId[ conditionDefinition.id ] = ruleConditionDefinitionClass;
                    definitionClass = ruleConditionDefinitionClass
                } else {
                    const conditionDefinitionClass = new ConditionDefinition( buildDefinitionParameters(conditionDefinition, options, apiVersion) );
                    this.byId[ conditionDefinition.id ] = conditionDefinitionClass;
                    definitionClass = conditionDefinitionClass
                }
                return {
                    [ conditionDefinition.id ]: definitionClass
                }
            })
        );
    }
    this.applied = {
        rules: Object.keys( this.rules||{} ),
        conditions: Object.keys( this.conditions||{} )
    }
});
