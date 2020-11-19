const RuleDefinition = require('../Definitions/RuleDefinition');
const initializeAppliedRule = require('./initializeAppliedRule');
const initializeAppliedConditions = require('./setters/initializeAppliedConditions');

const calculator = require('./getters/calculator');
const evaluateStatements = require('../evaluate/evaluateStatements');
const evaluateConditions = require('../evaluate/evaluateConditions');
const getPossibleStatements = require('./getters/getPossibleStatements');
const getAppliedStatement = require('./getters/getAppliedStatement');
const getUnsupportedStatements = require('./getters/getUnsupportedStatements');
const evaluate = require('../evaluate/evaluate');
const execute = require('../execute');
const executeFormula = require('../execute/executeFormula');
const executeTemplateString = require('../execute/executeTemplateString');
const mergeStatements = require('./getters/mergeStatements');
const getAppliedConditions = require('./getters/getAppliedConditions');
const initializeRuleDependencies = require('./setters/initializeRuleDependencies');
const isReadyForEvaluation = require('./getters/isReadyForEvaluation');
const addStatement = require('./setters/addStatement');
const validateStatement = require('./getters/validateStatement');
const initializeStatements = require('./setters/initializeStatements');
const getGlobalAttributes = require('./getters/getGlobalAttributes');
const getDefinitions = require('./getters/getDefinitions');
const toAppliedRuleObject = require('./getters/toAppliedRuleObject');
const updateGlobalAttributes = require('../AppliedRules/setters/updateGlobalAttributes');
const { objectRestSpread } = require('../utilities/util')
const RuleErrorHandler = require('../RuleErrorHandler');
const getConditionValue = require('../AppliedRules/getters/getConditionValue');

class AppliedRule extends RuleDefinition {
    constructor( parameters ){
        super( parameters );
        this.initializeAppliedRule( parameters );
    }

    joinErrorHandler( errorHandler ){
        this.errorHandler.joinHandler( errorHandler );
        const messages = this.errorHandler.getMessages();
        if( messages.length > 0 ){
            this.errors = messages;
        } else {
            this.errors = null;
        }
    }

    initializeErrorHandler(){
        this.errorHandler = new RuleErrorHandler({
            getRuleAttribute: this.getRuleAttribute
        });
    }

    getRuleAttribute( attributeName ){
        return this[ attributeName ];
    }

    addError( errorType, item ){
        this.errorHandler.addItem(errorType, item);
        const messages = this.errorHandler.getMessages();
        if( messages.length > 0 ){
            this.errors = messages;
        } else {
            this.errors = null;
        }
    }


}

AppliedRule.prototype.initializeAppliedRule = initializeAppliedRule;
AppliedRule.prototype.initializeAppliedConditions = initializeAppliedConditions;
AppliedRule.prototype.getConditionValue = getConditionValue;
AppliedRule.prototype.updateGlobalAttributes = updateGlobalAttributes;
AppliedRule.prototype.toAppliedRuleObject = toAppliedRuleObject;
AppliedRule.prototype.getDefinitions = getDefinitions;
AppliedRule.prototype.addStatement = getGlobalAttributes;
AppliedRule.prototype.isReadyForEvaluation = isReadyForEvaluation;
AppliedRule.prototype.addStatement = addStatement;
AppliedRule.prototype.validateStatement = validateStatement;
AppliedRule.prototype.initializeStatements = initializeStatements;
AppliedRule.prototype.initializeRuleDependencies = initializeRuleDependencies;
AppliedRule.prototype.getAppliedConditions = getAppliedConditions;
AppliedRule.prototype.evaluate = evaluate;
AppliedRule.prototype.execute = execute;
AppliedRule.prototype.executeFormula = executeFormula;
AppliedRule.prototype.executeTemplateString = executeTemplateString;
AppliedRule.prototype.calculator = calculator;
AppliedRule.prototype.evaluateConditions = evaluateConditions;
AppliedRule.prototype.evaluateStatements = evaluateStatements;
AppliedRule.prototype.getPossibleStatements = getPossibleStatements;
AppliedRule.prototype.getAppliedStatement = getAppliedStatement;
AppliedRule.prototype.getUnsupportedStatements = getUnsupportedStatements;
AppliedRule.prototype.mergeStatements = mergeStatements;



module.exports = AppliedRule;

