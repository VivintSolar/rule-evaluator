
// associationObject
module.exports = {
    ahj: {
        serviceNumber: "555555",
        rules: {
            dwgAutomationTemplateStringRule1: {
                statements: [
                    {value: "Template string value w/ {snowLoad}"}
                ]
            },
            dwgAutomationNumberRule1: {
                statements: [
                    {
                        value: 1,
                        condition: [
                            {
                                left: "dwgAutomationNumberCondition1",
                                operator: "=",
                                right: 1
                            }
                        ]
                    },
                    {
                        value: 2,
                        condition: [
                            {
                                left: "dwgAutomationNumberCondition1",
                                operator: "=",
                                right: 2
                            }
                        ]
                    }
                ]
            },
            snowLoad: {
                statements: [
                    {
                        value: 20,
                        condition: [
                            {
                                left:  "serviceElevation",
                                operator: "<=",
                                right: 2000
                            }
                        ]
                    },
                    {
                        value: 50,
                        condition: [
                            {
                                left:  "serviceElevation",
                                operator: ">",
                                right: 2000
                            }
                        ]
                    }
                ]
            }
        }
    }
};