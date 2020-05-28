
const RuleDefinition = require('../../../../lib/Definitions/RuleDefinition');


class TemplateStringRule extends RuleDefinition {
    constructor(definition) {
        super( definition );
        this.id = "templateStringRule";
        this.name = "TemplateStringRule";
        this.setDataType("template string");
        this.setOnConflict("standard");
    }
}

module.exports = TemplateStringRule;