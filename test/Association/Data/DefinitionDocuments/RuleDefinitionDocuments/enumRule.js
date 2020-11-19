const enumRule = {
    "allowableConditions": [],
    "description": "Enum Rule",
    "id": "enumRule",
    "name": "Enum Rule",
    "rule": true,
    "template": {
        "dataType": "enum",
        "onConflict": "standard",
        "items": [
            { "id": "default1", "name": "Default 1" },
            { "id": "default2", "name": "Default 2" },
            { "id": "dukeFL1", "name": "DukeFL 1" },
            { "id": "dukeFL2", "name": "DukeFL 2" },
            { "id": "fl01TampaBaySolar1", "name": "FL-01 Tampa Bay Solar 1" },
            { "id": "fl01TampaBaySolar2", "name": "FL-01 Tampa Bay Solar 2" },
            { "id": "florida1", "name": "Florida 1" },
            { "id": "florida2", "name": "Florida 2" },
            { "id": "nationalElectricalCode1", "name": "National Electrical Code 1" },
            { "id": "nationalElectricalCode2", "name": "National Electrical Code 2" },
            { "id": "stPetersburg1", "name": "St Petersburg 1" },
            { "id": "stPetersburg2", "name": "St Petersburg 2" }
        ]
    }
}

module.exports = enumRule;
