const AppliedRules = require('../AppliedRules');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');



class RuleEvaluator extends AppliedRules {
    constructor( associationObject ){
        const { ahj: { rules } } = associationObject;
        super({ rules, getDefinitions: this.getDefinitions,definitions  });
        this.initializeRuleEvaluator( parameters  );
    }

    getDefinitions(){

    }


}

RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;



module.exports = RuleEvaluator;

