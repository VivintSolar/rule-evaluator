module.exports = JSON.stringify(
    {
        templateString: "Condition Four - Default Condition - param1: {contractType}, param2: {systemSizeDc}, param3: {systemSizeAc}",
        exceptions: [ 'Condition One - param1: (System Size AC), param2: (System Size DC), param3: (Design Factor)',
            'Condition Two - param1: (CEC AC System Size), param2: (Contract Type), param3: (Design Factor)',
            'Condition Three - Contract Type #1: (Contract Type), Contract Type #2: (Contract Type), Contract Type #3: (Contract Type)' ],
        conditions: null,
        description: "Condition Four - Default Condition - param1: (Contract Type), param2: (System Size DC), param3: (System Size AC)",
        value: "Condition Four - Default Condition - param1: Cash, param2: 1225, param3: 50",
        errors: [ 'Required Condition Input Missing; Design Factor, CEC-AC System Size',
            'Required Condition Parameter Input Missing; Design Factor, CEC-AC System Size' ],
        id: "kennyTemplateString"
    }
);
