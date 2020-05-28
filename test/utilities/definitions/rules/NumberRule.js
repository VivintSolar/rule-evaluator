
const RuleDefinition = require('../../../../lib/Definitions/RuleDefinition');


class NumberRule extends RuleDefinition {
    constructor(definition) {
        super( definition );
        this.id = "numberRule";
        this.name = "Number Rule";
        this.setDataType("number");
        this.setOnConflict("standard");
    }
}

module.exports = NumberRule;