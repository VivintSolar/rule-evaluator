
const RuleDefinition = require('../../../../lib/Definitions/RuleDefinition');

const defaultList = [
    { id: "listItem1", name: "List Item #1" },
    { id: "listItem2", name: "List Item #2" },
    { id: "listItem3", name: "List Item #3" },
    { id: "listItem4", name: "List Item #4" },
    { id: "listItem5", name: "List Item #5" }
]

class OrderedListRule extends RuleDefinition {
    constructor(definition) {
        super( definition );
        this.id = this.id || "orderedListRule";
        this.name = this.name || "Ordered List Rule";
        this.setDataType("ordered list");
        if( !this.onConflict ){
            this.setOnConflict("standard");
        }
        if( !this.getItems() ) this.setItems( defaultList )
    }
}

module.exports = OrderedListRule;
