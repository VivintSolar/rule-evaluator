const AppliedRules = require('../AppliedRules');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');




class RuleEvaluator extends AppliedRules {
    constructor( associationObject ){
        const { ahj: { rules }, definitions, conditions } = associationObject;
        super({ rules, definitions, conditions  });
        this.initializeRuleEvaluator( associationObject  );
    }


}

RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;





module.exports = RuleEvaluator;

