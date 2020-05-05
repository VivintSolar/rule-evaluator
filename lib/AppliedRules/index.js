const Definitions = require('../Definitions');
const initializeAppliedRules = require('./initializeAppliedRules');
// const initializeRules = require('./initializeRules');
// const getGlobalAttributes = require("./getters/getGlobalAttributes");
// const updateGlobalAttributes = require("./setters/updateGlobalAttributes");
// const getDefinitions = require("./getters/getDefinitions");
// const getRule = require("./getters/getRule");

class AppliedRules extends Definitions {
    constructor( parameters ){
        super( parameters );
        this.getGlobalAttributes = this.getGlobalAttributes.bind(this);
        this.updateGlobalAttributes = this.updateGlobalAttributes.bind(this);
        // this.getDefinitions = this.getDefinitions.bind( this );
        this.getRule = this.getRule.bind( this );
        this.initializeAppliedRules( parameters );
    }
    clearConditions(){
        this.conditions = null;
        return this.conditions;
    }
    // getDefinitions( definitionIds ){
    //     return this.definitions.get( definitionIds );
    // }
    getGlobalAttributes(attributeNames){
        if( typeof attributeNames === 'string' ) return this[ attributeNames ];
        if( Array.isArray( attributeNames ) ) return Object.assign({},
            ...attributeNames.map( attributeName => ({
                [ attributeName ]: this.getGlobalAttributes( attributeName )
            }))
        );
    }
    updateGlobalAttributes( updatesByAttrName ){
        return Object.assign({},
            ...Object.keys(updatesByAttrName).map( attrName => {
                if( typeof updatesByAttrName[ attrName ] === 'object' && !Array.isArray(updatesByAttrName[ attrName ]) ){
                    this[ attrName ] = Object.assign({},
                        this[ attrName ],
                        updatesByAttrName[ attrName ]
                    );
                } else this[ attrName ] = updatesByAttrName[ attrName ];
                return {
                    [ attrName ]: this[ attrName ]
                }
            })
        )
    }
    getRule( ruleId ){
      if( !this.rules[ ruleId ] ) return null;
      return this.rules[ ruleId ];
    }
    evaluate(ruleId, conditions){
        this.conditions = conditions;
        if( !this.rules[ ruleId ] ) return {
            exceptions: null,
            conditions: null,
            value: null,
            errors: [
                `Rule Not Found: ${ruleId}`
            ],
            id: ruleId
        };
        return this.rules[ ruleId ].evaluate( )
    }
    evaluateAll() {
        return Object.assign({},
            ...Object.keys(this.rules).map(ruleId => ({
                [ ruleId ]: this.rules[ruleId].evaluate()
            }))
        )
    }
    getUnsupportedStatements( ruleId, clientConditions ){
        if( !this.rules[ ruleId ] ) return null;
        return this.rules[ ruleId ].getUnsupportedStatements( clientConditions )
    }
    getAppliedStatement( ruleId, conditions, valueAccessor ){
        if( !this.rules[ ruleId ] ) return null;
        return this.rules[ ruleId ].getAppliedStatement( conditions, valueAccessor )
    }
    getPossibleStatements( ruleId, clientConditions ){
        if( !this.rules[ ruleId ] ) return null;
        return this.rules[ ruleId ].getPossibleStatements( clientConditions )
    }
    batchEvaluate( rules, conditions ){
        this.conditions = conditions;
        return Object.assign({},
            ...rules.map( ruleId => ({
                [ ruleId ]: this.evaluate( ruleId, this.conditions )
            }))
        )
    }


}

AppliedRules.prototype.initializeAppliedRules = initializeAppliedRules;
// AppliedRules.prototype.initializeRules = initializeRules;
// AppliedRules.prototype.getGlobalAttributes = getGlobalAttributes;
// AppliedRules.prototype.updateGlobalAttributes = updateGlobalAttributes;
// AppliedRules.prototype.getDefinitions = getDefinitions;
// AppliedRules.prototype.getRule = getRule;

module.exports = AppliedRules;

