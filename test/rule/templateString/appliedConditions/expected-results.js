

module.exports = JSON.stringify(
    {
        templateString: "Condition One - param1: {systemSizeAc}, param2: {systemSizeDc}, param3: {designFactor}",
        exceptions: [
            "Condition Two - param1: (CEC AC System Size), param2: (Contract Type), param3: (Design Factor)"
        ],
        conditions: [
            { left: "designFactor", operator: "<", right: 75 }
        ],
        description: "Condition One - param1: (System Size AC), param2: (System Size DC), param3: (Design Factor)",
        value: "Condition One - param1: 50, param2: 1225, param3: 50",
        errors: null,
        id: "kennyTemplateString"
    }
);
