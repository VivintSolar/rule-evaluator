
const ConditionDefinition = require('../../../../lib/Definitions/ConditionDefinition');


class ServiceElevation extends ConditionDefinition {
    constructor(definition) {
        super( definition );
        this.id = "serviceElevation";
        this.name = "Service Elevation";
        this.setDataType("number");
        this.setOnConflict("standard");
    }
}

module.exports = ServiceElevation;