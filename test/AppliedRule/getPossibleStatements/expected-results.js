

module.exports = JSON.stringify([{
    "condition": [{"left": "testConditionNumber", "operator": "<", "right": 9.5}],
    "description": "Test Condition < 9.5°, Attr Name 1: 0",
    "value": {"attrName1": 0},
    "onConflict": "standard",
    "source": {"id": "id", "type": "type", "name": "name"}
}, {
    "condition": [{"left": "testConditionNumber", "operator": "<", "right": 9.5}],
    "description": "Test Condition < 9.5°, Attr Name 2: 0",
    "value": {"attrName2": 0},
    "onConflict": "standard",
    "source": {"id": "id", "type": "type", "name": "name"}
}, {
    "condition": [{"left": "testConditionEnum", "operator": "=", "right": "option1"}, {
        "left": "testConditionNumber",
        "operator": "<",
        "right": 9.5
    }],
    "description": "Test Condition Enum is Option 1, Attr Name 3: 100 AND Test Condition < 9.5°, Attr Name 3: 200",
    "value": {"attrName3": 200},
    "onConflict": "standard",
    "source": {"id": "id", "type": "type", "name": "name"}
}, {
    "condition": [{"left": "testConditionEnum", "operator": "=", "right": "option1"}],
    "description": "Test Condition Enum is Option 1, Attr Name 3: 200",
    "value": {"attrName3": 200},
    "onConflict": "standard",
    "source": {"id": "id", "type": "type", "name": "name"}
}, {"value": {"attrName2": 18}, "onConflict": "standard", "source": {"id": "id", "type": "type", "name": "name"}}]);
