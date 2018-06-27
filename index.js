const Rule = require('./lib/rule/index');
const { getAppliedConditions, pick } = require('./lib/utilities/util');

class RuleEvaluator {
    constructor({
        serviceAhj,
        definitions
    }) {
        this.rules = {};
        Object.keys( definitions.rules )
            .map( id => {
                const appliedRule = serviceAhj.rules[ id ];
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
                    this.evaluate( id );
                }
            });
    }
    getRule( ruleId ){
      if( !this.rules[ ruleId ] ) return null;
      return this.rules[ ruleId ];
    }
    evaluate(ruleId, conditions){
        if( !this.rules[ ruleId ] ) return null;
        return this.rules[ ruleId ].evaluate( conditions )
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


module.exports = RuleEvaluator;
