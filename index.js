const Rule = require('./lib/rule/index');
const { pick } = require('./lib/utilities/util');
const getAppliedConditions = require('./lib/utilities/getAppliedConditions');
const execute = require('./lib/execute');
const executeTemplateString = require('./lib/execute/executeTemplateString');
const executeFormula = require('./lib/execute/executeFormula');

//VERSION: 1.3.0

class RuleEvaluator {
    constructor({
        ahj,
        serviceAhj,
        definitions,
        conditions
    }) {
        ahj = serviceAhj || ahj;
        this.rules = {};
        this.conditions = conditions;
        if( ahj && definitions ){
            Object.keys( definitions.rules )
                .map( id => {
                    const appliedRule = ahj.rules[ id ];
                    const ruleDefinition = definitions.rules[ id ];
                    if( appliedRule ){
                        const appliedConditionIds = getAppliedConditions(
                            appliedRule.statements,
                            ruleDefinition.template.dataType,
                            ruleDefinition.allowableConditions
                        );
                        const appliedConditions = !appliedConditionIds ? null : pick(
                            definitions.conditions,
                            appliedConditionIds
                        );

                        this.rules[ id ] = new Rule(Object.assign({},
                            appliedRule,
                            ruleDefinition,
                            { appliedConditions }
                        ));
                        this.evaluate( id, conditions );
                    }
                });
        }
    }
    getRule( ruleId ){
      if( !this.rules[ ruleId ] ) return null;
      return this.rules[ ruleId ];
    }
    evaluate(ruleId, conditions){
        if( !this.rules[ ruleId ] ) return {
            exceptions: null,
            conditions: null,
            value: null,
            errors: [
                `Rule Not Found: ${ruleId}`
            ]
        };
        return this.rules[ ruleId ].evaluate( conditions )
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

RuleEvaluator.prototype.execute = execute;
RuleEvaluator.prototype.executeTemplateString = executeTemplateString;
RuleEvaluator.prototype.executeFormula = executeFormula;


module.exports = RuleEvaluator;
