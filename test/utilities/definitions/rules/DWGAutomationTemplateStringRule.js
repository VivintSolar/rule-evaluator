
const TemplateStringRule = require('./TemplateStringRule');


class DWGAutomationTemplateStringRule extends TemplateStringRule {
    constructor(definition) {
        super( definition );
        this.id = "dwgAutomationTemplateStringRule";
        this.name = "DWG Automation Template String Rule";
        this.setTags(["dwgAutomation"]);
    }
}

module.exports = DWGAutomationTemplateStringRule;