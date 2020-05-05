const AppliedRule = require("../AppliedRule");
const Definitions = require('../Definitions');

//initializeAppliedRules
module.exports = (function( {rules, definitions, conditions } ){

    this.definitions = new Definitions( definitions );
    this.rules = {};
    this.conditions = conditions;

    // const getDefinitions = definitionIds => this.definitions.get( definitionIds );

    this.ruleIds = [];

    Object.keys( rules ).map( ruleId => {
        const ruleDefinitionRaw = definitions.rules[ ruleId ];
        const appliedRule = rules[ ruleId ];
        if( ruleDefinitionRaw ){
            this.ruleIds.push( ruleId );
            this.rules[ ruleId ] = new AppliedRule(Object.assign({},
                appliedRule,
                ruleDefinitionRaw,
                {
                    getDefinitions: this.getDefinitions,
                    getRule: this.getRule,
                    getGlobalAttributes: this.getGlobalAttributes,
                    updateGlobalAttributes: this.updateGlobalAttributes,
                 }
            ));
        }
    })


});