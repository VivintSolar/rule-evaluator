
const templateString2TextPortion = "Name: Test String Rule, Value: {testStringRule}.\n" +
    "Name: Test Boolean Rule, Value: {testBooleanRule}.\n" +
    "Name: Test Number Rule, Value: {testNumberRule}.\n" +
    "Name: Test Enum Rule, Value: {testEnumRule}.\n" +
    "Name: Test Formula Rule 2, Value: {testFormula2}.\n";

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
            "testTemplateString2": {
                "statements": [
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 3 }],
                        "value": "When Test Number Condition For Test Template String 2 is 3 Then\n" + templateString2TextPortion
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 2 }],
                        "value": "When Test Number Condition For Test Template String 2 is 2 Then\n" + templateString2TextPortion
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 1 }],
                        "value": "When Test Number Condition For Test Template String 2 is 1 Then\n" + templateString2TextPortion
                    },
                    {
                        "value": "Default:::\n" + templateString2TextPortion
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
            },
            "testFormula2": {
                "statements": [
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 3 }],
                        "value": "testNumberRule + testNumberRule + testNumberRule"
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 2 }],
                        "value": "testNumberRule + testNumberRule"
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 1 }],
                        "value": "testNumberRule"
                    },
                    { "value": "0" }
                ]
            },
            "testNumberRule": {
                "statements": [
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 3 }],
                        "value": 3
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 2 }],
                        "value": 2
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 1 }],
                        "value": 1
                    },
                    { "value": 0 }
                ]
            },
            "testStringRule": {
                "statements": [
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 3 }],
                        "value": "'String 3'"
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 2 }],
                        "value": "'String 2'"
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 1 }],
                        "value": "'String 1'"
                    },
                    { "value": "'Default String'" }
                ]
            },
            "testEnumRule": {
                "statements": [
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 3 }],
                        "value": "enumOption3"
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 2 }],
                        "value": "enumOption2"
                    },
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": "=", "right": 1 }],
                        "value": "enumOption1"
                    },
                    { "value": "enumOption0" }
                ]
            },
            "testBooleanRule": {
                "statements": [
                    {
                        "condition": [{ "left": "testNumberCondition", "operator": ">", "right": 0 }],
                        "value": true
                    },
                    { "value": false }
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
                "ruleAsParameter":[
                    "testTemplateString"
                ],
                "template":{
                    "dataType": "formula"
                }
            },
            "testFormula2": {
                "id": "testFormula2",
                "name": "Test Formula 2",
                "description": "Test Formula 2",
                "allowableConditions": [
                    "testNumberCondition"
                ],
                "ruleAsParameter":[
                    "testTemplateString2"
                ],
                "allowableRuleParameters":[
                    "testNumberRule"
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
            },
            "testTemplateString2": {
                "id": "testTemplateString2",
                "name": "Test Template String 2",
                "description": "Test Template String 2",
                "allowableConditions":[
                    "testNumberCondition"
                ],
                "allowableRuleParameters":[
                    "testNumberRule",
                    "testStringRule",
                    "testEnumRule",
                    "testBooleanRule",
                    "testFormula2"
                ],
                "template":{
                    "dataType": "template string"
                }
            },
            "testNumberRule": {
                "id": "testNumberRule",
                "name": "Test Number Rule",
                "description": "Test Number Rule",
                "allowableConditions": [
                    "testNumberCondition"
                ],
                "ruleAsParameter":[
                    "testTemplateString2",
                    "testFormula2"
                ],
                "template":{
                    "dataType": "number"
                }
            },
            "testStringRule": {
                "id": "testStringRule",
                "name": "Test String Rule",
                "description": "Test String Rule",
                "allowableConditions": [
                    "testNumberCondition"
                ],
                "ruleAsParameter":[
                    "testTemplateString2"
                ],
                "template":{
                    "dataType": "string"
                }
            },
            "testEnumRule": {
                "id": "testEnumRule",
                "name": "Test Enum Rule",
                "description": "Test Enum Rule",
                "allowableConditions": [
                    "testNumberCondition"
                ],
                "ruleAsParameter":[
                    "testTemplateString2"
                ],
                "template":{
                    "dataType": "enum",
                    "items": [
                        { "id": "enumOption0", "name": "Enum Default Option" },
                        { "id": "enumOption1", "name": "Enum Option 1" },
                        { "id": "enumOption2", "name": "Enum Option 2" },
                        { "id": "enumOption3", "name": "Enum Option 3" }
                    ]
                }
            },
            "testBooleanRule": {
                "id": "testBooleanRule",
                "name": "Test Boolean Rule",
                "description": "Test Boolean Rule",
                "allowableConditions": [
                    "testNumberCondition"
                ],
                "ruleAsParameter":[
                    "testTemplateString2"
                ],
                "template":{
                    "dataType": "boolean",
                    "display": [ "Yes", "No" ]
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
            "testNumberCondition": {
                "applyTo": [
                    "testTemplateString2"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "Test Number Condition",
                "id": "testNumberCondition",
                "name": "Test Number Condition"
            },
        }
    }
};