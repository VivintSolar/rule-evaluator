
const ConditionDefinition = require('../../../../lib/ConditionDefinition');


class BooleanCondition extends ConditionDefinition {
    constructor(definition) {
        super( definition );
        this.id = "booleanCondition";
        this.name = "Boolean Condition";
        this.setDataType("boolean");
        this.setOnConflict("standard");
    }
}

module.exports = BooleanCondition;