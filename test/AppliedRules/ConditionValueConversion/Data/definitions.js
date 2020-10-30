
const numberRule = {
    id: "numberRule",
    name: "Number Rule",
    description: "Number Rule Description",
    ruleAsParameter: [
        "templateStringRule"
    ],
    condition: true,
    template: {
        onConflict: "standard",
        dataType: "number",
        units: "m",
        displayUnitsAs: "ft"
    },
}

const numberCondition = {
    id: "numberCondition",
    name: "Number Condition",
    description: "Number Condition Description",
    applyTo: [
        "templateStringRule"
    ],
    condition: true,
    template: {
        onConflict: "standard",
        dataType: "number",
        units: "m",
        displayUnitsAs: "ft"
    },
}


const templateStringRule = {
    id: "templateStringRule",
    name: "Template String Rule",
    description: "Template String Rule Description",
    template: {
        onConflict: "standard",
        dataType: "template string"
    },
    allowableConditions: [
        "numberCondition"
    ],
    allowableRuleParameters:[
        "numberRule"
    ],
    rule: true
};

module.exports = [
    templateStringRule
];
