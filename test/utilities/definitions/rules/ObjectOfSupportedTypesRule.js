
const RuleDefinition = require('../../../../lib/Definitions/RuleDefinition');

const supportedTypesTemplate = {
    numberAttributeUnits:{
        dataType: 'number',
        id: "numberAttributeUnits",
        name: "Number Attribute Units",
        units: "in"
    },
    numberAttributeDisplayAsUnits:{
        dataType: 'number',
        id: "numberAttributeDisplayAsUnits",
        name: "Number Attribute Display as Units",
        units: "m",
        displayUnitsAs: "in"
    },
    booleanBasic:{
        dataType: 'boolean',
        id: "booleanBasic",
        name: "Boolean Basic"
    },
    booleanDisplayAs:{
        dataType: 'boolean',
        id: "booleanDisplayAs",
        name: "Boolean Display As",
        display: ["Yes", "No"]
    },
    enumBasic: {
        dataType: 'enum',
        id: "booleanDisplayAs",
        enumBasic: "enumBasic",
        items: [
            { id: "option1", name: "Option #1" },
            { id: "option2", name: "Option #2" },
            { id: "option3", name: "Option #3" },
            { id: "option4", name: "Option #4" },
            { id: "option5", name: "Option #5" }
        ]
    },
    dateBasic:{
        dataType: 'date',
        id: "dateBasic",
        name: "Date Basic"
    },
}


class ObjectOfSupportedTypesRule extends RuleDefinition {
    constructor(definition) {
        super( definition );
        this.id = this.id || "objectOfSupportedTypesRule";
        this.name = this.name || "Object Of Supported Types Rule";
        this.setDataType("object");
        if( !this.getOnConflict() ) this.setOnConflict("standard");
        if( !this.getItem() ) this.setItem( supportedTypesTemplate )
    }
}

module.exports = ObjectOfSupportedTypesRule;
