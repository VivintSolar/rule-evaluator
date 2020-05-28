
const RuleDefinition = require('../../../../lib/Definitions/RuleDefinition');


class SnowLoad extends RuleDefinition {
    constructor(definition) {
        super( definition );
        this.id = "snowLoad";
        this.name = "Snow Load";
        this.setDataType("number");
        this.setOnConflict("standard");
    }
}

module.exports = SnowLoad;