
const AppliedRule = require('../../../lib/AppliedRule');
const BooleanRule = require('../definitions/rules/BooleanRule');

const definition = new BooleanRule();

const defaultStatements = [
    {
        value: true
    }
]

class BooleanAppliedRule extends AppliedRule {
    constructor(appliedRuleData) {
        super({
            statements: defaultStatements,
            ...definition.toRawDefinition(),
            ...appliedRuleData
        });
    }
}

module.exports = BooleanAppliedRule;
