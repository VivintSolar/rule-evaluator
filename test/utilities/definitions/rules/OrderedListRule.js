
const RuleDefinition = require('../../../../lib/RuleDefinition');


class OrderedListRule extends RuleDefinition {
    constructor(definition) {
        super( definition );
        this.id = this.id || "orderedListRule";
        this.name = this.name || "Ordered List Rule";
        this.setDataType("ordered list");
        if( !this.onConflict ){
            this.setOnConflict("standard");
        }
    }
}

module.exports = OrderedListRule;