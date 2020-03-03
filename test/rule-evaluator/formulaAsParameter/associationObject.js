module.exports = {
    "ahj": {
        "rules": {
            "testTemplateString": {
                "statements": [
                    {
                        "condition": [
                            { "left": "numberConditionForTestTemplateString", "operator": ">", "right": 5 }
                        ],
                        "value": "When Number Condition For Test Template String is Greater Than 5 Then\n" +
                            "Name: Test Formula, Value: {testFormula}.\n" +
                            "Name: Test String Condition, Value: {testStringCondition}.\n" +
                            "Name: Contract Type, Value: {contractType}.\n"
                    },
                    {
                        "condition": [
                            { "left": "numberConditionForTestTemplateString", "operator": "=", "right": 4 }
                        ],
                        "value": "When Number Condition For Test Template String is 4 Then\n" +
                            "Name: Test Formula, Value: {testFormula}.\n" +
                            "Name: Test String Condition, Value: {testStringCondition}.\n" +
                            "Name: Contract Type, Value: {contractType}.\n"
                    },
                    {
                        "value": "Default::: Formula as Template String Parameter; Name: Test Formula, Value: {testFormula}.\n" +
                            "String Condition as Template String Parameter; Name: Test String Condition, Value: {testStringCondition}.\n" +
                            "Enum Condition as Template String Parameter; Name: Contract Type, Value: {contractType}.\n"
                    }
                ]
            },
            "testFormula": {
                "statements": [
                    {
                        "condition": [
                            { "left": "numberConditionForTestFormula", "operator": ">", "right": 5 }
                        ],
                        "value": "(serviceElevation - squareFootage) * 2"
                    },
                    {
                        "condition": [
                            { "left": "numberConditionForTestFormula", "operator": "=", "right": 4 }
                        ],
                        "value": "(serviceElevation - squareFootage) / 2"
                    },
                    { "value": "serviceElevation - squareFootage" }
                ]
            }
        }
    },
    "definitions": {
        "rules": {
            "testFormula": {
                "id": "testFormula",
                "name": "Test Formula",
                "description": "Test Formula",
                "allowableConditions": [
                    "serviceElevation",
                    "squareFootage",
                    "numberConditionForTestFormula"
                ],
                "template":{
                    "dataType": "formula"
                }
            },
            "testTemplateString": {
                "id": "testTemplateString",
                "name": "Test Template String",
                "description": "Test Template String",
                "allowableConditions": [
                    "contractType",
                    "testStringCondition",
                    "numberConditionForTestTemplateString"
                ],
                "allowableRuleParameters":[
                    "testFormula"
                ],
                "template":{
                    "dataType": "template string"
                }
            }
        },
        "conditions": {
            "squareFootage": {
                "applyTo": [
                    "testFormula"
                ],
                "template": {
                    "units": "sq ft",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Square Footage",
                "id": "squareFootage",
                "name": "Square Footage"
            },
            "serviceElevation": {
                "applyTo": [
                    "testFormula"
                ],
                "template": {
                    "units": "ft",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Service Elevation",
                "id": "serviceElevation",
                "name": "Service Elevation"
            },
            "numberConditionForTestTemplateString": {
                "applyTo": [
                    "testTemplateString"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "Number Condition For Test Template String",
                "id": "numberConditionForTestTemplateString",
                "name": "Number Condition For Test Template String"
            },
            "numberConditionForTestFormula": {
                "applyTo": [
                    "testFormula"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "Number Condition For Test Formula",
                "id": "numberConditionForTestFormula",
                "name": "Number Condition For Test Formula"
            },
            "testStringCondition":{
                "applyTo": [
                    "testTemplateString"
                ],
                "condition": true,
                "description": "Test String Condition",
                "id": "testStringCondition",
                "name": "Test String Condition",
                "template": {
                    "dataType": "string"
                }
            },
            "contractType":{
                "applyTo": [
                    "testTemplateString"
                ],
                "condition": true,
                "description": "Sales Force Contract Type Field",
                "id": "contractType",
                "name": "Contract Type",
                "template": {
                    "dataType": "enum",
                    "items": [
                        {
                            "id": "cash",
                            "name": "Cash"
                        },
                        {
                            "id": "loan",
                            "name": "Loan"
                        },
                        {
                            "id": "ppa",
                            "name": "PPA"
                        },
                        {
                            "id": "lease",
                            "name": "Lease"
                        },
                        {
                            "id": "zeroLease",
                            "name": "Zero-Lease"
                        }
                    ]
                }
            }
        }
    }
};