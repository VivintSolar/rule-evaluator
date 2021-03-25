const AssociationV2 = require('../Association/AssociationV2');
const FamilyTree = require('../FamilyTree');
const AppliedRules = require('../AppliedRules');
const Measurements = require('../Measurements');
const initializeRuleEvaluator = require('./initializeRuleEvaluator');
const getDesignedAhj = require('./getters/getDesignedAhj');
const getAssociationInfo = require('./getters/getAssociationInfo');
const hierarchy = require('../Association/associationTranslator/apiVersionTranslator/v2Tov1/Inheritance/hierarchy');
const Performance = require('../utilities/Performance');

const defaultOptions = {
    convertResults: 'default'
}


class RuleEvaluator extends AssociationV2 {
    constructor( associationObject, _options ){

        const options = Object.assign({}, defaultOptions, associationObject.options||{}, _options);
        let performance;
        if( options.trackPerformance ){
            let performanceTracker;
            if( typeof options.trackPerformance !== "boolean" ){
                performanceTracker = options.trackPerformance;
                options.trackPerformance = true;
            }
            performance = new Performance(performanceTracker);
            performance.addMarker('_initialization');
            performance.startMarker('_initialization');
        }

        super( Object.assign({}, associationObject, { options }), options, performance );
        this.initializeRuleEvaluator( associationObject, options );
        if( options.trackPerformance ){
            this.performance.endMarker('_initialization');
        }
    }
    getPerformanceSummary() {
        return this.performance.getSummary();
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

