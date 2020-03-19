

module.exports = JSON.stringify({
    "exceptions": {
        "attrName3": [
            "Test Condition Enum is Option 2, Attr Name 3: 100 AND Test Condition < 9.5°, Attr Name 3: 200",
            "Test Condition Unsupported Enum is Option 1 AND Test Condition Enum is Option 1, Attr Name 3: 400 ",
            "Test Condition Unsupported Enum is Option 1, Attr Name 3: 300",
            "Test Condition Enum is Option 2, Attr Name 3: 100"
        ]
    },
    "conditions": [
        {
            "left": "testConditionEnum",
            "operator": "=",
            "right": "option1"
        },
        {
            "left": "testConditionNumber",
            "operator": "<",
            "right": 9.5
        }
    ],
    "source": {
        "attrName2": {
            "id": "id",
            "type": "type",
            "name": "name"
        },
        "attrName3": {
            "id": "id",
            "type": "type",
            "name": "name"
        },
        "attrName1": {
            "id": "id",
            "type": "type",
            "name": "name"
        }
    },
    "description": {
        "attrName1": "Test Condition < 9.5°, Attr Name 1: 0",
        "attrName2": "Test Condition < 9.5°, Attr Name 2: 0",
        "attrName3": "Test Condition Enum is Option 1, Attr Name 3: 200"
    },
    "value": {
        "attrName2": 0,
        "attrName3": 200,
        "attrName1": 0
    },
    "errors": [ 'Required Condition Input Missing; Test Enum Condition Unsupported' ],
    "id": "testRequirementObject"
});
