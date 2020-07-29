
const AppliedRule = require('../../../lib/AppliedRule');
const ObjectOfSupportedTypesRuleDefinition = require('../definitions/rules/ObjectOfSupportedTypesRule');

const defaultStatements = [
    {
        value: {
            numberAttributeUnits: 6,
            numberAttributeDisplayAsUnits: 6,
            booleanBasic: true,
            booleanDisplayAs:true,
            enumBasic: 'option2',
            dateBasic: '2020-07-29T19:58:47.456Z'
        }
    }
];
const definition = new ObjectOfSupportedTypesRuleDefinition({});

class ObjectOfSupportedTypesAppliedRule extends AppliedRule {
    constructor(appliedRuleData) {
        super({
            statements: defaultStatements,
            ...definition.toRawDefinition(),
            ...appliedRuleData
        });
    }
}

module.exports = ObjectOfSupportedTypesAppliedRule;
