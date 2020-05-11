
const NumberCondition = require('./numberCondition');


class DWGAutomationNumberCondition extends NumberCondition {
    constructor(definition) {
        super( definition );
        this.id = "dwgAutomationNumberCondition";
        this.name = "DWG Automation Number Condition";
        this.setDataType("number");
        this.setOnConflict("standard");
    }
}

module.exports = DWGAutomationNumberCondition;