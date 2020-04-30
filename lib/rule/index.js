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
const initializeRule = require('./initializeRule');
const getAppliedConditions = require('./getAppliedConditions');
const getRuleDependencies = require('./getRuleDependencies');
const isReadyForEvaluation = require('./isReadyForEvaluation');

const RuleErrorHandler = require('../RuleErrorHandler');

class Rule {
    constructor( parameters ){
        this.addError = this.addError.bind(this);
        this.getRuleAttribute = this.getRuleAttribute.bind(this);
        this.initializeErrorHandler = this.initializeErrorHandler.bind(this);
        this.joinErrorHandler = this.joinErrorHandler.bind(this);
        this.getDefinition = this.getDefinition.bind(this);
        this.initializeRule( parameters );
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

    getDefinition( id ){
        if( (this.ruleDependencyIds||[]).includes( id ) ){
            return this.getRule( id );
        }
        return (this.appliedConditions||{})[ id ];
    };
}

Rule.prototype.initializeRule = initializeRule;
Rule.prototype.isReadyForEvaluation = isReadyForEvaluation;
Rule.prototype.getRuleDependencies = getRuleDependencies;
Rule.prototype.getAppliedConditions = getAppliedConditions;
Rule.prototype.evaluate = evaluate;
Rule.prototype.execute = execute;
Rule.prototype.executeFormula = executeFormula;
Rule.prototype.executeTemplateString = executeTemplateString;
Rule.prototype.calculator = calculator;
Rule.prototype.evaluateConditions = evaluateConditions;
Rule.prototype.evaluateStatements = evaluateStatements;
Rule.prototype.getPossibleStatements = getPossibleStatements;
Rule.prototype.getAppliedStatement = getAppliedStatement;
Rule.prototype.getUnsupportedStatements = getUnsupportedStatements;
Rule.prototype.mergeStatements = mergeStatements;

module.exports = Rule;
