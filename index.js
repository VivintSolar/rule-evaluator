const execute = require('./lib/execute');
const initialize = require('./lib/initialize');
const executeTemplateString = require('./lib/execute/executeTemplateString');
const executeFormula = require('./lib/execute/executeFormula');

//VERSION: 1.3.3

class RuleEvaluator {
    constructor( parameters ) {
        this.clearConditions = this.clearConditions.bind(this);
        this.getRule = this.getRule.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.evaluateAll = this.evaluateAll.bind(this);
        this.batchEvaluate = this.batchEvaluate.bind(this);
        this.getUnsupportedStatements = this.getUnsupportedStatements.bind(this);
        this.getAppliedStatement = this.getAppliedStatement.bind(this);
        this.getPossibleStatements = this.getPossibleStatements.bind(this);
        this.getGlobalAttributes = this.getGlobalAttributes.bind(this);
        this.updateGlobalAttributes = this.updateGlobalAttributes.bind(this);
        this.initialize( parameters );
    }

    clearConditions(){
        this.conditions = null;
        return this.conditions;
    }
    getGlobalAttributes( attributeNames ){
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
                this[ attrName ] = Object.assign({},
                    this[ attrName ],
                    updatesByAttrName[ attrName ]
                );
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
    evaluate(ruleId, conditions, strictMode){
        this.conditions = conditions;
        this.strictMode = strictMode;
        if( !this.rules[ ruleId ] ) return {
            exceptions: null,
            conditions: null,
            value: null,
            errors: [
                `Rule Not Found: ${ruleId}`
            ]
        };
        return this.rules[ ruleId ].evaluate( )
    }
    evaluateStrict( ruleId, conditions ){
        return this.evaluate( ruleId, conditions, true )
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
    batchEvaluate( batch ){
        return batch.map( ({ ruleId, conditions }) => (
            this.evaluate( ruleId, conditions )
        ))
    }
}

RuleEvaluator.prototype.initialize = initialize;
RuleEvaluator.prototype.execute = execute;
RuleEvaluator.prototype.executeTemplateString = executeTemplateString;
RuleEvaluator.prototype.executeFormula = executeFormula;


module.exports = RuleEvaluator;
