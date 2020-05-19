

module.exports = JSON.stringify([
    {
        dwgAutomationTemplateStringRule: {
            templateString: 'Template string value w/ {snowLoad}',
            exceptions: null,
            conditions: null,
            value: null,
            errors: [
                'Required Condition Input Missing; Service Elevation',
                'Required Rule Parameter Input Missing; Snow Load'
            ],
            id: 'dwgAutomationTemplateStringRule'
        },
        dwgAutomationNumberRule: {
            exceptions: null,
            conditions: null,
            value: null,
            errors: [ 'Required Condition Input Missing; DWG Automation Number Condition' ],
            id: 'dwgAutomationNumberRule'
        }
    },
    {
        dwgAutomationTemplateStringRule: {
            templateString: 'Template string value w/ {snowLoad}',
            exceptions: null,
            conditions: null,
            value: 'Template string value w/ 50',
            errors: null,
            id: 'dwgAutomationTemplateStringRule'
        },
        dwgAutomationNumberRule: {
            exceptions: null,
            conditions: [ {
                left: "dwgAutomationNumberCondition",
                operator: "=",
                right: 1
            } ],
            value: 1,
            errors: null,
            id: 'dwgAutomationNumberRule'
        }
    }
]);
