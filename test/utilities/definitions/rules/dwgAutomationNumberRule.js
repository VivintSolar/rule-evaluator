
const NumberRule = require('./numberRule');


class DWGAutomationNumberRule extends NumberRule {
    constructor(definition) {
        super( definition );
        this.id = "dwgAutomationNumberRule";
        this.name = "DWGAutomationNumberRule";
        this.setTags(["dwgAutomation"]);
    }
}

module.exports = DWGAutomationNumberRule;