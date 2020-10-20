const AssociationV2 = require('../Association/AssociationV2');
const FamilyTree = require('../FamilyTree');
const AppliedRules = require('../AppliedRules');
const Measurements = require('../Measurements');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');
const getDesignedAhj = require('./getters/getDesignedAhj');
const getAssociationInfo = require('./getters/getAssociationInfo');
const hierarchy = require('../Association/associationTranslator/apiVersionTranslator/v2Tov1/Inheritance/hierarchy');


const defaultOptions = {
    convertResults: 'default'
}


class RuleEvaluator extends AssociationV2 {
    constructor( associationObject ){
        const options = Object.assign({}, defaultOptions, associationObject.options||{});
        super(
            Object.assign({},
                associationObject, { options }
            )
        );
        this.initializeRuleEvaluator( associationObject, options );
    }
}

RuleEvaluator.FamilyTree = FamilyTree;
RuleEvaluator.AppliedRules = AppliedRules;
RuleEvaluator.Measurements = Measurements;
RuleEvaluator.hierarchy = hierarchy;
RuleEvaluator.prototype.getDesignedAhj = getDesignedAhj;
RuleEvaluator.prototype.getAssociationInfo = getAssociationInfo;
RuleEvaluator.prototype.initializeRuleEvaluator = initializeRuleEvaluator;


module.exports = RuleEvaluator;

