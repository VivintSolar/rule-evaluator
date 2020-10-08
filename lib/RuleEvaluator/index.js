const Association = require('../Association');
const FamilyTree = require('../FamilyTree');
const Measurements = require('../Measurements');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');
const translateAssociationObject = require('./associationTranslator/translateAssociationObject');


const defaultOptions = {
    convertResults: 'default'
}


class RuleEvaluator extends Association {
    constructor( associationObject ){
        super(
            translateAssociationObject(
                Object.assign({},
                    associationObject, {
                        options: Object.assign({}, defaultOptions, associationObject.options||{})
                    }
                ), 'v1'
            )

        );
        this.initializeRuleEvaluator( associationObject );
    }

}

RuleEvaluator.FamilyTree = FamilyTree;
RuleEvaluator.Measurements = Measurements;
RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;


module.exports = RuleEvaluator;

