
const ConditionDefinition = require('../../../../lib/Definitions/ConditionDefinition');


class ContractType extends ConditionDefinition {
    constructor(definition) {
        super( definition );
        this.id = "contractType";
        this.name = "Contract Type";
        this.setDataType("enum");
        this.setOnConflict("standard");
        this.setItems([
            { id: "cash", name: "Cash" },
            { id: "loan", name: "Loan" },
            { id: "ppa", name: "PPA" },
            { id: "lease", name: "Lease" },
            { id: "zeroLease", name: "Zero-Lease" }
        ]);
    }
}

module.exports = ContractType;