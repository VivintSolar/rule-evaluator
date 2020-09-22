
const AppliedRule = require('../../../lib/AppliedRule');
const OrderedListRule = require('../definitions/rules/OrderedListRule');

const definition = new OrderedListRule();

const defaultStatements = definition.getItems()
    .filter((item,index) => !(index % 2) )
    .reverse()
    .map(({ id:value }) => ({ value }) )

class OrderedListAppliedRule extends AppliedRule {
    constructor(appliedRuleData) {
        super({
            statements: defaultStatements,
            ...definition.toRawDefinition(),
            ...appliedRuleData
        });
    }
}

module.exports = OrderedListAppliedRule;
