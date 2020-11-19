

const objectRule = {
    "template": {
        "item": {
            "numberAttribute": {
                "name": "Number Attribute",
                "units": "m",
                "displayUnitsAs": "in",
                "dataType": "number"
            },
            "booleanAttribute": {
                "name": "Boolean Attribute",
                "dataType": "boolean"
            },
            "enumAttribute": {
                "name": "Attr Name 3",
                "dataType": "enum",
                "items": [
                    { "id": "option1", "name": "Option 1" },
                    { "id": "option2", "name": "Option 2" },
                    { "id": "option3", "name": "Option 3" },
                    { "id": "option4", "name": "Option 4" }
                ]
            }
        },
        "onConflict": "standard",
            "dataType": "object"
    },
    "description": "Object Requirement for Testing",
    "id": "testRequirementObject",
    "name": "Test Requirement Object",
    "allowableConditions": [],
    "rule": true
};

module.exports = objectRule;
