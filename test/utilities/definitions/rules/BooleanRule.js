
const RuleDefinition = require('../../../../lib/Definitions/RuleDefinition');


class BooleanRule extends RuleDefinition {
    constructor(definition) {
        super( definition );
        this.id = "booleanRule";
        this.name = "Boolean Rule";
        if(!this.getOnConflict()) this.setOnConflict("standard");
        if(!this.getDataType()) this.setDataType("boolean");
    }
}

module.exports = BooleanRule;
