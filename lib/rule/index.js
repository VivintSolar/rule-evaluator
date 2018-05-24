const calculator = require('../calculator');
const evaluateStatements = require('../evaluateStatements');
const evaluateConditions = require('../evaluateConditions');
const getPossibleStatements = require('../getPossibleStatements');
const getAppliedStatement = require('../getAppliedStatement');
const getUnsupportedStatements = require('../getUnsupportedStatements');
const evaluate = require('../evaluate');


class Rule {
    constructor({
        id,
        name,
        statements,
        appliedConditions,
        template,
        tags
    }){
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
    }
}

Rule.prototype.evaluate = evaluate;
Rule.prototype.calculator = calculator;
Rule.prototype.evaluateConditions = evaluateConditions;
Rule.prototype.evaluateStatements = evaluateStatements;
Rule.prototype.getPossibleStatements = getPossibleStatements;
Rule.prototype.getAppliedStatement = getAppliedStatement;
Rule.prototype.getUnsupportedStatements = getUnsupportedStatements;

module.exports = Rule;
