

module.exports = JSON.stringify(
    {
        "testObject": {
            "exceptions": null,
            "conditions": null,
            "source": null,
            "description": null,
            "value": null,
            "errors": null,
            "id": "testObject"
        },
        "testEnum": {
            "exceptions": [
                "Service Elevation equals 2 then Enum Option 1"
            ],
            "conditions": null,
            "value": null,
            "errors": null,
            "id": "testEnum"
        },
        "testOrderedList": {
            "exceptions": [
                "Service Elevation equals 2 THen Ordered List Option 1"
            ],
            "conditions": null,
            "value": null,
            "errors": null,
            "id": "testOrderedList"
        },
        "testBoolean": {
            "exceptions": [
                "Service Elevation equals 2 Then True"
            ],
            "conditions": null,
            "value": null,
            "errors": null,
            "id": "testBoolean"
        },
        "testString": {
            "exceptions": [
                "Service Elevation equals 2 Then My Test String"
            ],
            "conditions": null,
            "value": null,
            "errors": null,
            "id": "testString"
        },
        "testNumber": {
            "exceptions": [
                "Service Elevation equals 2 Then 1234"
            ],
            "conditions": null,
            "value": null,
            "errors": null,
            "id": "testNumber"
        },
        "testFormula": {
            "formula": "(serviceElevation - squareFootage) / 2",
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                'Required Condition Parameter Input Missing; Square Footage'
            ],
            "id": "testFormula"
        },
        "fakeRule": {
            "exceptions": null,
            "conditions": null,
            "value": null,
            "errors": [
                "Rule Not Found: fakeRule"
            ],
            "id": "fakeRule"
        }
    }
);
