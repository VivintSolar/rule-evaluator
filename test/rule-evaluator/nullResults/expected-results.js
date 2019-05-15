

module.exports = JSON.stringify(
    {
        "testObject": {
            "exceptions": null,
            "conditions": null,
            "source": null,
            "description": null,
            "value": null,
            "errors": null
        },
        "testEnum": {
            "exceptions": [
                "Service Elevation equals 2 then Enum Option 1"
            ],
            "conditions": null,
            "value": null,
            "errors": null
        },
        "testOrderedList": {
            "exceptions": [
                "Service Elevation equals 2 THen Ordered List Option 1"
            ],
            "conditions": null,
            "value": null,
            "errors": null
        },
        "testBoolean": {
            "exceptions": [
                "Service Elevation equals 2 Then True"
            ],
            "conditions": null,
            "value": null,
            "errors": null
        },
        "testString": {
            "exceptions": [
                "Service Elevation equals 2 Then My Test String"
            ],
            "conditions": null,
            "value": null,
            "errors": null
        },
        "testNumber": {
            "exceptions": [
                "Service Elevation equals 2 Then 1234"
            ],
            "conditions": null,
            "value": null,
            "errors": null
        },
        "testFormula": {
            "formula": "(serviceElevation - squareFootage) / 2",
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                "Required Parameter Missing Square Footage"
            ]
        },
        "fakeRule": {
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                "Rule Not Found: fakeRule"
            ]
        }
    }
);
