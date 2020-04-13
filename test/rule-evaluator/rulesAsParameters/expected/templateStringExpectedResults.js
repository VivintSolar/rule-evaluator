module.exports = JSON.stringify(
    {
        "testTemplateString2 | testNumberCondition === EMPTY": {
            "templateString": "Default:::\nName: Test String Rule, Value: {testStringRule}.\nName: Test Boolean Rule, Value: {testBooleanRule}.\nName: Test Number Rule, Value: {testNumberRule}.\nName: Test Enum Rule, Value: {testEnumRule}.\nName: Test Formula Rule 2, Value: {testFormula2}.",
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                "Required Condition Input Missing; Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition",
                "Required Rule Parameter Input Missing; Test Number Rule, Test String Rule, Test Enum Rule, Test Boolean Rule, Test Number Rule, Test Formula 2"
            ],
            "id": "testTemplateString2"
        },
        "testTemplateString2 | testNumberCondition === 0": {
            "templateString": "Default:::\nName: Test String Rule, Value: {testStringRule}.\nName: Test Boolean Rule, Value: {testBooleanRule}.\nName: Test Number Rule, Value: {testNumberRule}.\nName: Test Enum Rule, Value: {testEnumRule}.\nName: Test Formula Rule 2, Value: {testFormula2}.",
            "exceptions": null,
            "conditions": null,
            "value": "Default:::\nName: Test String Rule, Value: 'Default String'.\nName: Test Boolean Rule, Value: No.\nName: Test Number Rule, Value: 0.\nName: Test Enum Rule, Value: Enum Default Option.\nName: Test Formula Rule 2, Value: 0.",
            "errors": null,
            "id": "testTemplateString2"
        },
        "testTemplateString2 | testNumberCondition === 1": {
            "templateString": "When Test Number Condition For Test Template String 2 = 1 Then\nName: Test String Rule, Value: {testStringRule}.\nName: Test Boolean Rule, Value: {testBooleanRule}.\nName: Test Number Rule, Value: {testNumberRule}.\nName: Test Enum Rule, Value: {testEnumRule}.\nName: Test Formula Rule 2, Value: {testFormula2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition",
                    "operator": "=",
                    "right": 1
                }
            ],
            "value": "When Test Number Condition For Test Template String 2 = 1 Then\nName: Test String Rule, Value: 'String 1'.\nName: Test Boolean Rule, Value: Yes.\nName: Test Number Rule, Value: 1.\nName: Test Enum Rule, Value: Enum Option 1.\nName: Test Formula Rule 2, Value: 1.",
            "errors": null,
            "id": "testTemplateString2"
        },
        "testTemplateString2 | testNumberCondition === 2": {
            "templateString": "When Test Number Condition For Test Template String 2 = 2 Then\nName: Test String Rule, Value: {testStringRule}.\nName: Test Boolean Rule, Value: {testBooleanRule}.\nName: Test Number Rule, Value: {testNumberRule}.\nName: Test Enum Rule, Value: {testEnumRule}.\nName: Test Formula Rule 2, Value: {testFormula2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition",
                    "operator": "=",
                    "right": 2
                }
            ],
            "value": "When Test Number Condition For Test Template String 2 = 2 Then\nName: Test String Rule, Value: 'String 2'.\nName: Test Boolean Rule, Value: Yes.\nName: Test Number Rule, Value: 2.\nName: Test Enum Rule, Value: Enum Option 2.\nName: Test Formula Rule 2, Value: 4.",
            "errors": null,
            "id": "testTemplateString2"
        },
        "testTemplateString2 | testNumberCondition === 3": {
            "templateString": "When Test Number Condition For Test Template String 2 = 3 Then\nName: Test String Rule, Value: {testStringRule}.\nName: Test Boolean Rule, Value: {testBooleanRule}.\nName: Test Number Rule, Value: {testNumberRule}.\nName: Test Enum Rule, Value: {testEnumRule}.\nName: Test Formula Rule 2, Value: {testFormula2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition",
                    "operator": "=",
                    "right": 3
                }
            ],
            "value": "When Test Number Condition For Test Template String 2 = 3 Then\nName: Test String Rule, Value: 'String 3'.\nName: Test Boolean Rule, Value: Yes.\nName: Test Number Rule, Value: 3.\nName: Test Enum Rule, Value: Enum Option 3.\nName: Test Formula Rule 2, Value: 9.",
            "errors": null,
            "id": "testTemplateString2"
        },
        "testTemplateStringNested | testNumberCondition2 === EMPTY": {
            "templateString": "Default:::\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                "Required Condition Input Missing; Test Number Condition 2, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition 2, Test Number Condition, Test Number Condition, Test Number Condition 2, Test Number Condition 2",
                "Required Condition Parameter Input Missing; Test Number Condition 2",
                "Required Rule Parameter Input Missing; Test Number Rule, Test String Rule, Test Enum Rule, Test Boolean Rule, Test Number Rule, Test Formula 2, Test Template String 2, Test Number Rule, Test Formula 2, Test Number Rule 2, Test Formula Nested, Test Number Rule 2"
            ],
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2 === 0": {
            "templateString": "Default:::\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                "Required Condition Input Missing; Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition",
                "Required Rule Parameter Input Missing; Test Number Rule, Test String Rule, Test Enum Rule, Test Boolean Rule, Test Number Rule, Test Formula 2, Test Template String 2, Test Number Rule, Test Formula 2, Test Formula Nested"
            ],
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2 === 1": {
            "templateString": "When Test Number Condition 2 For Test Template String Nested = 1 Then\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition2",
                    "operator": "=",
                    "right": 1
                }
            ],
            "value": null,
            "errors": [
                "Required Condition Input Missing; Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition",
                "Required Rule Parameter Input Missing; Test Number Rule, Test String Rule, Test Enum Rule, Test Boolean Rule, Test Number Rule, Test Formula 2, Test Template String 2, Test Number Rule, Test Formula 2, Test Formula Nested"
            ],
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2 === 2": {
            "templateString": "When Test Number Condition 2 For Test Template String Nested = 2 Then\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition2",
                    "operator": "=",
                    "right": 2
                }
            ],
            "value": null,
            "errors": [
                "Required Condition Input Missing; Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition",
                "Required Rule Parameter Input Missing; Test Number Rule, Test String Rule, Test Enum Rule, Test Boolean Rule, Test Number Rule, Test Formula 2, Test Template String 2, Test Number Rule, Test Formula 2, Test Formula Nested"
            ],
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2 === 3": {
            "templateString": "When Test Number Condition 2 For Test Template String Nested = 3 Then\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition2",
                    "operator": "=",
                    "right": 3
                }
            ],
            "value": null,
            "errors": [
                "Required Condition Input Missing; Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition",
                "Required Rule Parameter Input Missing; Test Number Rule, Test String Rule, Test Enum Rule, Test Boolean Rule, Test Number Rule, Test Formula 2, Test Template String 2, Test Number Rule, Test Formula 2, Test Formula Nested"
            ],
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2, testNumberCondition === EMPTY": {
            "templateString": "Default:::\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                "Required Condition Input Missing; Test Number Condition 2, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition, Test Number Condition 2, Test Number Condition, Test Number Condition, Test Number Condition 2, Test Number Condition 2",
                "Required Condition Parameter Input Missing; Test Number Condition 2",
                "Required Rule Parameter Input Missing; Test Number Rule, Test String Rule, Test Enum Rule, Test Boolean Rule, Test Number Rule, Test Formula 2, Test Template String 2, Test Number Rule, Test Formula 2, Test Number Rule 2, Test Formula Nested, Test Number Rule 2"
            ],
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2, testNumberCondition === 0": {
            "templateString": "Default:::\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": null,
            "value": "Default:::\nName: Test Template String 2, Value: Default:::\nName: Test String Rule, Value: 'Default String'.\nName: Test Boolean Rule, Value: No.\nName: Test Number Rule, Value: 0.\nName: Test Enum Rule, Value: Enum Default Option.\nName: Test Formula Rule 2, Value: 0..\nName: Test Formula Nested, Value: 0.\nName: Test Number Rule 2, Value: 0.\nName: Test Number Condition 2, Value: 0.",
            "errors": null,
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2, testNumberCondition === 1": {
            "templateString": "When Test Number Condition 2 For Test Template String Nested = 1 Then\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition2",
                    "operator": "=",
                    "right": 1
                }
            ],
            "value": "When Test Number Condition 2 For Test Template String Nested = 1 Then\nName: Test Template String 2, Value: When Test Number Condition For Test Template String 2 = 1 Then\nName: Test String Rule, Value: 'String 1'.\nName: Test Boolean Rule, Value: Yes.\nName: Test Number Rule, Value: 1.\nName: Test Enum Rule, Value: Enum Option 1.\nName: Test Formula Rule 2, Value: 1..\nName: Test Formula Nested, Value: 3.\nName: Test Number Rule 2, Value: 1.\nName: Test Number Condition 2, Value: 1.",
            "errors": null,
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2, testNumberCondition === 2": {
            "templateString": "When Test Number Condition 2 For Test Template String Nested = 2 Then\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition2",
                    "operator": "=",
                    "right": 2
                }
            ],
            "value": "When Test Number Condition 2 For Test Template String Nested = 2 Then\nName: Test Template String 2, Value: When Test Number Condition For Test Template String 2 = 2 Then\nName: Test String Rule, Value: 'String 2'.\nName: Test Boolean Rule, Value: Yes.\nName: Test Number Rule, Value: 2.\nName: Test Enum Rule, Value: Enum Option 2.\nName: Test Formula Rule 2, Value: 4..\nName: Test Formula Nested, Value: 10.\nName: Test Number Rule 2, Value: 2.\nName: Test Number Condition 2, Value: 2.",
            "errors": null,
            "id": "testTemplateStringNested"
        },
        "testTemplateStringNested | testNumberCondition2, testNumberCondition === 3": {
            "templateString": "When Test Number Condition 2 For Test Template String Nested = 3 Then\nName: Test Template String 2, Value: {testTemplateString2}.\nName: Test Formula Nested, Value: {testFormulaNested}.\nName: Test Number Rule 2, Value: {testNumberRule2}.\nName: Test Number Condition 2, Value: {testNumberCondition2}.",
            "exceptions": null,
            "conditions": [
                {
                    "left": "testNumberCondition2",
                    "operator": "=",
                    "right": 3
                }
            ],
            "value": "When Test Number Condition 2 For Test Template String Nested = 3 Then\nName: Test Template String 2, Value: When Test Number Condition For Test Template String 2 = 3 Then\nName: Test String Rule, Value: 'String 3'.\nName: Test Boolean Rule, Value: Yes.\nName: Test Number Rule, Value: 3.\nName: Test Enum Rule, Value: Enum Option 3.\nName: Test Formula Rule 2, Value: 9..\nName: Test Formula Nested, Value: 21.\nName: Test Number Rule 2, Value: 3.\nName: Test Number Condition 2, Value: 3.",
            "errors": null,
            "id": "testTemplateStringNested"
        }
    }
);