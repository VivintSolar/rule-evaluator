
const ConditionDefinition = require('../../../../lib/Definitions/ConditionDefinition');


class NumberCondition extends ConditionDefinition {
    constructor(definition) {
        super( definition );
        this.id = "numberCondition";
        this.name = "Number Condition";
        this.setDataType("number");
        this.setOnConflict("standard");
    }
}

module.exports = NumberCondition;