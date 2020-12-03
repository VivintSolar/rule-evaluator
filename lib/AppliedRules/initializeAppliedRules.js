const AppliedRule = require("../AppliedRule");



//initializeAppliedRules
module.exports = (function( {rules, definitions, conditions, options, apiVersion } ){

    this.rules = {};
    this.conditions = conditions;
    this.apiVersion = apiVersion;
    this.ruleIds = [];
    if( rules ){
        Object.keys( rules ).map( ruleId => {
            const ruleDefinitionRaw = definitions.rules[ ruleId ];
            const appliedRule = rules[ ruleId ];
            if( ruleDefinitionRaw ){
                this.ruleIds.push( ruleId );
                this.rules[ ruleId ] = new AppliedRule(Object.assign({},
                    appliedRule,
                    ruleDefinitionRaw, {
                        getDefinitions: this.getDefinitions,
                        getRule: this.getRule,
                        getGlobalAttributes: this.getGlobalAttributes,
                        updateGlobalAttributes: this.updateGlobalAttributes,
                        options
                    }
                ));
            }
        })
    }




});
