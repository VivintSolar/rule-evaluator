
const ConditionDefinition = require('../../../../lib/Definitions/ConditionDefinition');


class NumberCondition extends ConditionDefinition {
    constructor(definition) {
        super( definition );
        this.id = "numberCondition1";
        this.name = "Number Condition 1";
        this.setDataType("number");
        this.setOnConflict("standard");
    }
}

module.exports = NumberCondition;