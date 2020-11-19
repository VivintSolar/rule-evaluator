
const expectedV2 = {
    "enumRule": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": {"id":"stPetersburg1","name":"St Petersburg 1"},
        "errors": null,
        "id": "enumRule"
    },
    "booleanRule": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": false,
        "errors": null,
        "id": "booleanRule"
    },
    "numberRule": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": 236.221,
        "errors": null,
        "id": "numberRule"
    },
    "stringRule": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": "String For City: St. Petersburg Document",
        "errors": null,
        "id": "stringRule"
    },
    "enumRuleUnion": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": {"id":"stPetersburg1","name":"St Petersburg 1"},
        "errors": null,
        "id": "enumRuleUnion"
    },
    "booleanRuleUnion": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": false,
        "errors": null,
        "id": "booleanRuleUnion"
    },
    "numberRuleUnion": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": 236.221,
        "errors": null,
        "id": "numberRuleUnion"
    },
    "stringRuleUnion": {
        "exceptions": null,
        "conditions": null,
        "source": {
            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
            "name": "St. Petersburg",
            "type": "City"
        },
        "value": "String For Nation: Default Document\nString For National Electrical Code: 2014 National Electrical Code Document\nString For State: Florida Document\nString For ROC: FL-01 Tampa Bay Solar Document\nString For Utility: DukeFL Document\nString For City: St. Petersburg Document",
        "errors": null,
        "id": "stringRuleUnion"
    }
};

const expectedV1 = Object.assign({},
    expectedV2, {
        enumRule: Object.assign({},
            expectedV2.enumRule, {
                value: expectedV2.enumRule.value.name
            }
        ),
        enumRuleUnion: Object.assign({},
            expectedV2.enumRuleUnion, {
                value: expectedV2.enumRuleUnion.value.name
            }
        ),
    }
);


module.exports = {
    expectedV1: JSON.stringify( expectedV1 ),
    expectedV2: JSON.stringify( expectedV2 )
}
