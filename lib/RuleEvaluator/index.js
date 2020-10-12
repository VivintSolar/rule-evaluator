const Association = require('../Association');
const FamilyTree = require('../FamilyTree');
const AppliedRules = require('../AppliedRules');
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

// RuleEvaluator.buildAssociationObject = ( documents, authorityInfo, rest ) => {
//     return { documents, authorityInfo, requestParameters, ...rest||{} };
// }

RuleEvaluator.FamilyTree = FamilyTree;
RuleEvaluator.AppliedRules = AppliedRules;
RuleEvaluator.Measurements = Measurements;
RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;


module.exports = RuleEvaluator;

