const Association = require('../Association');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');




class RuleEvaluator extends Association {
    constructor( associationObject ){
        super(associationObject);
        this.initializeRuleEvaluator( associationObject  );
    }

}

RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;


module.exports = RuleEvaluator;

