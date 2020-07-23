const Association = require('../Association');
const FamilyTree = require('../FamilyTree');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');




class RuleEvaluator extends Association {
    constructor( associationObject ){
        super(associationObject);
        this.initializeRuleEvaluator( associationObject  );
    }

}

RuleEvaluator.FamilyTree = FamilyTree;
RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;


module.exports = RuleEvaluator;

