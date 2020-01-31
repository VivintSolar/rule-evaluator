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

class Rule {
    constructor({
        id,
        name,
        statements,
        appliedConditions,
        template,
        tags,
        timeStamp
    }){
        this.addError = this.addError.bind(this);
        this.id = id;
        this.name = name;
        this.statements = statements;
        this.template = template;
        this.siteConditions = null;
        this.description = null;
        this.unsupported = null;
        this.supported = null;
        this.appliedConditions = appliedConditions;
        this.exceptions = null;
        this.tags = tags;
        this.timeStamp = timeStamp;
        this.errors = null;
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
