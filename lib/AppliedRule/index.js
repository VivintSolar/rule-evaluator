const RuleDefinition = require('../RuleDefinition');
const initializeAppliedRule = require('./initializeAppliedRule');
const initializeAppliedConditions = require('./initializeAppliedConditions');

const calculator = require('./calculator');
const evaluateStatements = require('../evaluate/evaluateStatements');
const evaluateConditions = require('../evaluate/evaluateConditions');
const getPossibleStatements = require('./getPossibleStatements');
const getAppliedStatement = require('./getAppliedStatement');
const getUnsupportedStatements = require('./getUnsupportedStatements');
const evaluate = require('../evaluate/evaluate');
const execute = require('../execute');
const executeFormula = require('../execute/executeFormula');
const executeTemplateString = require('../execute/executeTemplateString');
const mergeStatements = require('./mergeStatements');
const getAppliedConditions = require('./getAppliedConditions');
const getRuleDependencies = require('./getRuleDependencies');
const isReadyForEvaluation = require('./isReadyForEvaluation');

const RuleErrorHandler = require('../RuleErrorHandler');


class AppliedRule extends RuleDefinition {
    constructor( parameters ){
        // const { getDefinitions, getAppliedRule } = parameters;
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


AppliedRule.prototype.isReadyForEvaluation = isReadyForEvaluation;
AppliedRule.prototype.getRuleDependencies = getRuleDependencies;
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

