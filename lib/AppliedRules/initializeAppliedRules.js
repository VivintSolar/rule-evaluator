const AppliedRule = require("../AppliedRule");

//initializeAppliedRulesoptions
module.exports = (function( {rules, definitions, conditions, options: associationOptions , apiVersion }, _options, performance ){

    this.performance = performance;
    this.options = Object.assign({}, associationOptions, _options);
    this.rules = {};
    this.conditions = conditions;
    this.apiVersion = apiVersion;
    this.ruleIds = [];
    if( rules ){
        Object.keys( rules ).map( ruleId => {
            const ruleDefinitionRaw = definitions.rules[ ruleId ];
            const appliedRule = rules[ ruleId ];
            let rulePerformance;
            if( this.options.trackPerfomance ){
                this.performance.addMarker(ruleId);
                rulePerformance = {
                    start: this.performance.startMarker( ruleId ),
                    end: this.performance.endMarker( ruleId ),
                    get: this.performance.getMarker( ruleId )
                }
            }

            if( ruleDefinitionRaw ){
                this.ruleIds.push( ruleId );
                this.rules[ ruleId ] = new AppliedRule(Object.assign({},
                    appliedRule,
                    ruleDefinitionRaw, {
                        getDefinitions: this.getDefinitions,
                        getRule: this.getRule,
                        getGlobalAttributes: this.getGlobalAttributes,
                        updateGlobalAttributes: this.updateGlobalAttributes,
                        options: this.options
                    }
                ), rulePerformance);
            }
        })
    }




});
