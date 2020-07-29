const Association = require('../Association');
const FamilyTree = require('../FamilyTree');
const Measurements = require('../Measurements');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');


const defaultOptions = {
    convertResults: 'default'
}


class RuleEvaluator extends Association {
    constructor( associationObject ){
        super({
            ...associationObject,
            options: {
                ...defaultOptions,
                ...associationObject.options||{}
            }
        });
        this.initializeRuleEvaluator( associationObject  );
    }

}

RuleEvaluator.FamilyTree = FamilyTree;
RuleEvaluator.Measurements = Measurements;
RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;


module.exports = RuleEvaluator;

