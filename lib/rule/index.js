const calculator = require('../calculator');
const evaluateStatements = require('../evaluateStatements');
const evaluateConditions = require('../evaluateConditions');
const getPossibleStatements = require('../getPossibleStatements');
const getAppliedStatement = require('../getAppliedStatement');
const getUnsupportedStatements = require('../getUnsupportedStatements');
const evaluate = require('../evaluate');
const execute = require('../execute');
const executeFormula = require('../execute/executeFormula');
const executeTemplateString = require('../execute/executeTemplateString');
const mergeStatements = require('../mergeStatements');
const initializeRule = require('../initializeRule');
const getAppliedConditions = require('../getAppliedConditions');
const getRuleDependencies = require('../getRuleDependencies');
const isReadyForEvaluation = require('../isReadyForEvaluation');

class Rule {
    constructor( parameters ){
        this.addError = this.addError.bind(this);
        this.addErrors = this.addErrors.bind(this);
        this.initializeRule( parameters );
    }
    addErrors( messages ){
        messages.map( this.addError );
    }
    addError( message ){
        if( !this.errors ){
            this.errors = [];
        }
        if( !this.errors.includes(message) ){
            this.errors.push(message);
        }
    }
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
