

module.exports = JSON.stringify([{
    "condition": [{
        "left": "testConditionUnsupportedEnum",
        "operator": "=",
        "right": "option1"
    }, {"left": "testConditionEnum", "operator": "=", "right": "option1"}],
    "description": "Test Condition Unsupported Enum is Option 1 AND Test Condition Enum is Option 1, Attr Name 3: 400 ",
    "value": {"attrName3": 400},
    "onConflict": "standard",
    "source": {"id": "id", "type": "type", "name": "name"}
}, {
    "condition": [{"left": "testConditionUnsupportedEnum", "operator": "=", "right": "option1"}],
    "description": "Test Condition Unsupported Enum is Option 1, Attr Name 3: 300",
    "value": {"attrName3": 300},
    "onConflict": "standard",
    "source": {"id": "id", "type": "type", "name": "name"}
}]);
