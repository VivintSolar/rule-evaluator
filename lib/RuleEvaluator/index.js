const AppliedRules = require('../AppliedRules');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');




class RuleEvaluator extends AppliedRules {
    constructor( associationObject ){
        const { ahj, definitions, conditions } = associationObject;
        const { rules } = ahj||{};
        super({ rules, definitions, conditions  });
        this.initializeRuleEvaluator( associationObject  );
    }


}

RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;





module.exports = RuleEvaluator;

